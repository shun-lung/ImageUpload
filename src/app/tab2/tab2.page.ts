import { Component } from '@angular/core';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
 
  public preview:any;
  public showText = true;

  loadImageFromDevice(event) {

    const file = event.target.files[0];
  
    const reader = new FileReader();
  
    reader.readAsArrayBuffer(file);
  
    reader.onload = () => {
  
      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
      
      // create blobURL, such that we could use it in an image element:
      let blobURL: string = URL.createObjectURL(blob);

      // show image 
      this.preview =  blobURL;
      this.showText = false;
    };
  
    reader.onerror = (error) => {
  
      //handle errors
  
    };
  };

}
