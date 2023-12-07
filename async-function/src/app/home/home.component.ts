import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }
  articles = [{
    'no': 1,
    'name': 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'author': 'Andrews',
    'shares': '2.456'
  },
  {
    'no': 2,
    'name': 'Lorem Ipsum has been the industrys standard dummy text ever',
    'author': 'Sammy Jhon',
    'shares': '3.096'
  },
  {
    'no': 3,
    'name': 'Aldus PageMaker including versions of Lorem Ipsum.',
    'author': 'Samuel Jhonson',
    'shares': '1.309'
  },
  {
    'no': 4,
    'name': 'Various versions have evolved over the years, sometimes by accident',
    'author': 'David Becham',
    'shares': '7.657'
  },
  {
    'no': 5,
    'name': 'web page editors now use Lorem Ipsum as their default model text.',
    'author': 'Rosce',
    'shares': '2.211'
  },
  {
    'no': 6,
    'name': 'All the Lorem Ipsum generators on the Internet tend to repeat predefined',
    'author': 'Finlay',
    'shares': '1.726'
  }]
  istrue = false;

  onDelete(num: any) {
    this.articles.splice(num, 1)
  }


  async onclickdel() {
    const results = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return new Promise((resolve, reject) => {
        if (result.isConfirmed) {
          resolve(Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }))
        }
        else {
          reject('cancelled')
        }
      })

    });

  }
  async delone(num: any) {
    try {
      const response = await this.onclickdel()
      console.log("response");
      const secresponse = await this.onDelete(num)
      console.log("secresponse");
    } catch (error) {
      console.error(error)
    }



  }
}
