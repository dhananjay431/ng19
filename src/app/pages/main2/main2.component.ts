/** @format */

import { Component, computed, effect, signal } from "@angular/core";
import { HeroService } from "../../hero.service";
declare var db: any, pdfMake: any;
@Component({
  selector: "app-main2",
  imports: [],
  templateUrl: "./main2.component.html",
  styleUrl: "./main2.component.scss",
})
export class Main2Component {
  fileData: any = signal({ pdfData: "", scale: 1, rotation: 0 });
  canvasArr: any = [];

  constructor(private hs: HeroService) {
    effect(async () => {
      let that = this;
      let showPdf: any = document.getElementById("showPdf");
      showPdf.innerHTML = "";
      let res2: any = await that.hs.pdf(this.fileData());
      console.log("res2=>", res2);
      for (let i = 0; i < res2.pdfs.length; i++) {
        showPdf?.appendChild(res2.pdfs[i].canvas);
      }
    });
  }
  async file(ev: any) {
    let that = this;
    let pdfData = await that.hs.filechange(ev.target.files[0]);
    this.fileData.set({ ...this.fileData(), pdfData: pdfData });
  }
  rng(ev: any, flag: any) {
    if (flag == "scale") {
      this.fileData.set({ ...this.fileData(), scale: ev.target.value });
    } else if (flag == "rotation") {
      this.fileData.set({ ...this.fileData(), rotation: ev.target.value });
    }
  }
}
