import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.page.html',
  styleUrls: ['./sweet-alert.page.scss'],
})
export class SweetAlertPage implements OnInit {

  alertList = [
    { name: 'Success Alert', icon: 'checkmark-circle', action: 'success' },
    { name: 'Error Alert', icon: 'close-circle', action: 'error' },
    { name: 'Warning Alert', icon: 'warning', action: 'warning' },
    { name: 'Info Alert', icon: 'information-circle', action: 'info' },
    { name: 'Question Alert', icon: 'help-circle', action: 'question' },
    { name: 'Github Username Lookup', icon: 'logo-github', action: 'github' },
    { name: 'Select Field Validation', icon: 'list', action: 'select' }
  ];

  constructor() { }

  ngOnInit() {
    console.log();
  }

  showAlert(action: string) {
    switch (action) {
      case 'success':
        Swal.fire({
          title: 'Success!',
          text: 'This is a success message!',
          icon: 'success',
          confirmButtonText: 'OK',
          backdrop: false
        });
        break;

      case 'error':
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'Try Again',
          backdrop: false
        });
        break;

      case 'warning':
        Swal.fire({
          title: 'Warning!',
          text: 'Be careful with this action.',
          icon: 'warning',
          confirmButtonText: 'Understood',
          backdrop: false
        });
        break;

      case 'info':
        Swal.fire({
          title: 'Info!',
          text: 'Here is some information.',
          icon: 'info',
          confirmButtonText: 'Got It',
          backdrop: false
        });
        break;

      case 'question':
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to proceed?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          backdrop: false
        }).then((result) => {
          if (result.isConfirmed) {
            console.log('User clicked Yes');
          } else {
            console.log('User clicked No');
          }
        });
        break;

      case 'github':
        Swal.fire({
          title: "Submit your Github username",
          input: "text",
          inputValue: "AdemDemirFE",
          inputAttributes: {
            autocapitalize: "off"
          },
          showCancelButton: true,
          confirmButtonText: "Look up",
          showLoaderOnConfirm: true,
          backdrop: false,
          preConfirm: async (login) => {
            try {
              const githubUrl = `https://api.github.com/users/${login}`;
              const response = await fetch(githubUrl);
              if (!response.ok) {
                return Swal.showValidationMessage(
                  `${JSON.stringify(await response.json())}`
                );
              }
              return response.json();
            } catch (error) {
              Swal.showValidationMessage(`Request failed: ${error}`);
            }
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: `${result.value.login}'s avatar`,
              imageUrl: result.value.avatar_url,
              backdrop: false,
            });
          }
        });
        break;

        case 'select':
        Swal.fire({
          title: "Select field validation",
          input: "select",
          backdrop: false,
          inputOptions: {
            Fruits: {
              apples: "Apples",
              bananas: "Bananas",
              grapes: "Grapes",
              oranges: "Oranges"
            },
            Vegetables: {
              potato: "Potato",
              broccoli: "Broccoli",
              carrot: "Carrot"
            },
            icecream: "Ice cream"
          },
          inputPlaceholder: "Select a fruit",
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === "oranges") {
                resolve();
              } else {
                resolve("You need to select oranges :)");
              }
            });
          }
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: `You selected: ${result.value}`,
              backdrop: false
            });
          }
        });
        break;

      default:
        Swal.fire({
          title: 'Oops!',
          text: 'Invalid alert type.',
          icon: 'error',
          backdrop: false,
        });
        break;
    }
  }
}