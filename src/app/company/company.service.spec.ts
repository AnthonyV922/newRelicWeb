// import { TestBed, fakeAsync, tick } from "@angular/core/testing";
// import { CompanyService } from "./company.service";
// import {ICompany} from './company'
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import {HttpClient, HttpErrorResponse} from '@angular/common/http'
// import { doesNotThrow } from "assert";
// import { defer, of } from "rxjs";
// describe('Company Sevice', () => {
//     let companyService: CompanyService;
//     let http: HttpClient;
//     let httpSpy: jasmine.SpyObj<HttpClient>
//     let httpController: HttpTestingController;
//     let companySpy: jasmine.SpyObj<CompanyService>
//     beforeEach(() => {
//        let httpSpyObj = jasmine.createSpyObj('HttpClient', ['get'])
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//             providers: [CompanyService,
//             {provide: HttpClient, useValue: httpSpy}]
//         })
//         companyService = TestBed.get(CompanyService)
//         httpSpy = TestBed.get(httpSpy) as jasmine.SpyObj<HttpClient>
//         http = TestBed.get(HttpClient);
//         httpController = TestBed.get(HttpTestingController)
//     })

//     afterEach(() => {
//         httpController.verify();
//     })

//     it('service created', () =>  {
//         expect(companyService).toBeDefined();
//     })


//     it('getCompanies should return expected data', (done: DoneFn) => {
//         const testData: ICompany[] = [{id: 1, name: 'Test1'}];
//         const query = {};
//         httpSpy.get.and.returnValue(of(testData))
        
//         companyService.getCompanies({}).subscribe({
//             next: companies => {
//                 expect(companies).toEqual(testData);
//                 done();
//             },
//             error: done.fail
//         })

//         expect(httpSpy.get.calls.count()).toBe(1);
        
//     })

//     it('should return an error when the server returns a 404', (done: DoneFn) => {
//         const errorResponse = new HttpErrorResponse({
//           error: 'test 404 error',
//           status: 404, statusText: 'Not Found'
//         });
      
//         httpSpy.get.and.returnValue((errorResponse));
//         companySpy.getCompanies.and.returnValue(errorResponse)
//         companySpy.getCompanies({}).subscribe({ next: companies => done.fail('expected an error, not companies'),
//         error: error  => {
//           httpSpy.get.and.throwError(error);
//        //   expect(error.message).toContain('test 404 error');
//           done();
//         }})
//       });

 
    
// })