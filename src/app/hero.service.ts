/** @format */

import { Injectable } from "@angular/core";
declare var pdfjsLib: any, pdfMake: any;
@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor() {}
  filechange(file: any) {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = (reader.result as string).split(",")[1];
          resolve(base64String);
        };
        reader.readAsDataURL(file);
      }
    });
  }
  download(canvasArr: any) {
    return new Promise((resolve, reject) => {
      let _pdfMake = pdfMake.createPdf({
        pageMargins: [0, 0, 0, 0],
        pageSize: {
          width: canvasArr[0].canvas.width,
          height: canvasArr[0].canvas.height,
        },
        content: canvasArr.map((dataUrl: any) => {
          return {
            image: dataUrl.canvas.toDataURL("image/png"),
            width: dataUrl.canvas.width, // Adjust width as needed
            height: dataUrl.canvas.height,
          };
        }),
      });
      _pdfMake.download(new Date().getTime() / 1000 + "_rotated.pdf");
      _pdfMake.getBase64((base64: any) => {
        resolve(base64);
      });
    });
  }
  async pdf({ pdfData, scale, rotation }: any) {
    if (pdfData == "") {
      return Promise.reject("pdfData is empty");
    }
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";
    let pdf = await pdfjsLib.getDocument({ data: atob(pdfData) }).promise;
    let all = Array(pdf._pdfInfo.numPages)
      .fill(0)
      .map(async (x: any, i: any) => {
        let page = await pdf.getPage(i + 1);
        //let scale = 1;
        let viewport = page.getViewport({ scale: scale, rotation: rotation });
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        let renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext).promise;
        return { canvas, context };
      });
    let pdfs = await Promise.all(all);
    let download = await this.download(pdfs);
    return { pdfs, download };
  }
}
