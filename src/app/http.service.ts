import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
}


// signup(data) {
//   return this.http.post('/signup', data, {responseType: 'json'}).pipe(
//   map((data: any) => {
//    return data;
//   }), 
//   catchError(error => {
//   return throwError('Something went wrong!');
//   }));
// }

// login(data) {
//   return this.http.post('/login', data, {responseType: 'json'}).pipe(
//   map((data: any) => {
//    return data;
//   }), 
//   catchError(error => {
//   return throwError('Something went wrong!');
//   }));
// }

//   get_jobs(data) {
//     return this.http.post('/get_jobs',data, {responseType: 'json'}).pipe(
//     map((data: any) => {
//      return data;
//     }), 
//     catchError(error => {
//     return throwError('Something went wrong!');
//     }));
//   }

//   create_job(data) {
//     console.log(data);
//     return this.http.post('/create_job', data, {responseType: 'json'}).pipe(
//     map((data: any) => {
//      return data;
//     }), 
//     catchError(error => {
//     return throwError('Something went wrong!');
//     }));
//   }

//   delete_job(data) {
//     return this.http.post('/delete_job', data, {responseType: 'json'}).pipe(
//     map((data: any) => {
//      return data;
//     }), 
//     catchError(error => {
//     return throwError('Something went wrong!');
//     }));
//   }

//   pause_job(data) {
//    // console.log(data);
//     return this.http.post('/pause_job', data, {responseType: 'json'}).pipe(
//     map((data: any) => {
//      return data;
//     }), 
//     catchError(error => {
//     return throwError('Something went wrong!');
//     }));
//   }

//   resume_job(data) {
//     return this.http.post('/resume_job', data, {responseType: 'json'}).pipe(
//     map((data: any) => {
//      return data;
//     }), 
//     catchError(error => {
//     return throwError('Something went wrong!');
//     }));
//   }

  signup(data) {
    return this.http.post('http://localhost:3000/signup', data, {responseType: 'json'}).pipe(
    map((data: any) => {
     return data;
    }), 
    catchError(error => {
    return throwError('Something went wrong!');
    }));
  }

  login(data) {
    return this.http.post('http://localhost:3000/login', data, {responseType: 'json'}).pipe(
    map((data: any) => {
     return data;
    }), 
    catchError(error => {
    return throwError('Something went wrong!');
    }));
  }

    get_jobs(data) {
      return this.http.post('http://localhost:3000/get_jobs',data, {responseType: 'json'}).pipe(
      map((data: any) => {
       return data;
      }), 
      catchError(error => {
      return throwError('Something went wrong!');
      }));
    }

    create_job(data) {
      console.log(data);
      return this.http.post('http://localhost:3000/create_job', data, {responseType: 'json'}).pipe(
      map((data: any) => {
       return data;
      }), 
      catchError(error => {
      return throwError('Something went wrong!');
      }));
    }

    delete_job(data) {
      return this.http.post('http://localhost:3000/delete_job', data, {responseType: 'json'}).pipe(
      map((data: any) => {
       return data;
      }), 
      catchError(error => {
      return throwError('Something went wrong!');
      }));
    }

    pause_job(data) {
     // console.log(data);
      return this.http.post('http://localhost:3000/pause_job', data, {responseType: 'json'}).pipe(
      map((data: any) => {
       return data;
      }), 
      catchError(error => {
      return throwError('Something went wrong!');
      }));
    }

    resume_job(data) {
      return this.http.post('http://localhost:3000/resume_job', data, {responseType: 'json'}).pipe(
      map((data: any) => {
       return data;
      }), 
      catchError(error => {
      return throwError('Something went wrong!');
      }));
    }

    
  
}
