import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetConvertService } from '../../service/get-convert.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  show: boolean = false;
  constructor(private getConvert_service: GetConvertService) {}
  data: any;
  support: any = [];
  selected: any;
  selectedData: any;
  input: any;
  output: any;
  showBtn: boolean = false;

  getConvert() {
    this.getConvert_service.getConvertType().subscribe((res: any) => {
      this.data = res;

      this.data.map((info) => {
        this.support.includes(info.group) ? '' : this.support.push(info.group);
      });

      console.log(this.support);
    });
  }

  getValue() {
    this.selectedData = this.data.filter((info) => info.group == this.selected);
    console.log(this.selectedData);
    this.show = true;
  }

  image: any;
  get_file(event) {
    this.image = event.target.files[0];
  }

  convert() {
    if (this.image && this.input.inputformat && this.output.inputformat) {
      // let data = {
      //   inputFormat: this.input.inputformat,
      //   outputFormat: this.output.inputformat,
      //   type: 'convert',
      //   group: this.input.group,
      // };
      let formdata: FormData = new FormData();
      formdata.append('image', this.image);
      formdata.append('inputFormat', this.input.inputformat);
      formdata.append('outputFormat', this.output.inputformat);
      formdata.append('type', 'convert');
      formdata.append('group', this.input.group);
      this.getConvert_service.convert(formdata).subscribe((res: any) => {
        console.log(res);
      });
    } else {
      console.log('hello');
    }
  }

  ngOnInit(): void {
    this.getConvert();
  }
}
