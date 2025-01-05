import { Injectable } from '@angular/core';
declare var pdfjsLib:any;
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  filechange(file: any) {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = (reader.result as string).split(',')[1];
          resolve(base64String);
         
        };
        reader.readAsDataURL(file);
      }
    })
  }

  async pdf( {pdfData,scale,rotation}:any){
    if(pdfData == "") {
      return Promise.reject("pdfData is empty");
    }
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';
    let  pdf = await pdfjsLib.getDocument({data: atob(pdfData)}).promise;
    return Array(pdf._pdfInfo.numPages).fill(0).map(async (x:any,i:any)=>{
      let page  = await pdf.getPage(i+1);
      //let scale = 1;
      let viewport = page.getViewport({scale: scale,rotation: rotation });
      let canvas = document.createElement('canvas');
      let context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      let renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      let renderTask = page.render(renderContext).promise;
      return {c:renderTask,canvas,context};
    })

  }
}
