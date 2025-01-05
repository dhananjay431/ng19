/** @format */

import { Component, computed, effect, signal } from "@angular/core";
import { HeroService } from "../../hero.service";
declare var db: any;
@Component({
  selector: "app-main2",
  imports: [],
  templateUrl: "./main2.component.html",
  styleUrl: "./main2.component.scss",
})
export class Main2Component {
  fileData: any = signal({ pdfData: "", scale: 1, rotation: 0 });
  constructor(private hs: HeroService) {
    effect(async () => {
      let that = this;
      let showPdf: any = document.getElementById("showPdf");
      showPdf.innerHTML = "";
      let res1 = await that.hs.pdf(this.fileData());
      for (let i = 0; i < res1.length; i++) {
        let res2 = await res1[i];
        showPdf?.appendChild(res2.canvas);
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
