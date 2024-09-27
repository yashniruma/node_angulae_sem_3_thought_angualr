import { HttpClient } from '@angular/common/http';
import { Component , Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ymht',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './ymht.component.html',
  styleUrl: './ymht.component.scss'
})
export class YmhtComponent {


  ymht_Array: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  // Create A variable for store the user  data 
  yname: string = "";
  ysurname: string = "";
  zid: string = "";
  crrentid = "";

  constructor(private http: HttpClient) {
    this.getAlldata();
  }

  ngOnInit(): void {
    
  }

  getAlldata() {
    this.http.get("http://localhost:8085/api/ymht/")
      .subscribe((resultData: any) => {  //it angular built in method use to fetch the data from server
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.ymht_Array = resultData.data;
      });
  }

  register() {
    
    let ydata = {
      "yname": this.yname,
      "ysurname": this.ysurname,
      "zid": this.zid
    };

    this.http.post("http://localhost:8085/api/ymht/add", ydata).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Data hasbeen Added");
      this.getAlldata();
    });

  }

  save() {
    if (this.crrentid == '') {
      this.register();
    }
    else {
      this.UpdateRecords();
    }

  }
  setDelete(data: any) {
    this.http.delete("http://localhost:8085/api/ymht/delete" + "/" + data.id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Data Deleted");
        this.getAlldata();
      });
  }

  //setUpadate

  setUpdate(data: any) {
    this.yname = data.yname;
    this.ysurname = data.ysurname;
    this.zid = data.zid;

    this.crrentid = data.id;
  };

  UpdateRecords() {
    var body_Data = {
      "yname": this.yname,
      "ysurname": this.ysurname,
      "zid": this.zid
    };
    this.http.put("http://localhost:8085/api/ymht/update" + "/" + this.crrentid, body_Data).subscribe((resultData: any) => { 
    // this.http.put(`http://localhost:8085/api/ymht/update/${this.crrentid}`, body_Data).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Data Upadated');
      this.getAlldata();
    });
  }


}

