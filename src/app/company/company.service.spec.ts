import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { CompanyService } from "./company.service";
import {ICompany} from './company'
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { doesNotThrow } from "assert";
import { defer } from "rxjs";
describe('Company Sevice', () => {
    let companyService: CompanyService;
    let http: HttpClient;
    let httpSpy: { get: jasmine.Spy}
    let httpController: HttpTestingController;
    beforeEach(() => {
        httpSpy = jasmine.createSpyObj('HttpClient', ['get'])
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CompanyService,
            {provide: HttpClient, useValue: httpSpy}]
        })
        companyService = TestBed.get(CompanyService)
        http = TestBed.get(HttpClient);
        httpController = TestBed.get(HttpTestingController)
    })

    afterEach(() => {
        httpController.verify();
    })

    it('service created', () =>  {
        expect(companyService).toBeDefined();
    })


    it('getCompanies should return expected data', fakeAsync(() => {
        const testData: ICompany[] = [{id: 1, name: 'Test1'}];
        const query = {};
        // httpSpy.get.and.nextWith(IComany)
        // httpSpy.get.and.returnValue(defer (d) => {
        // })
        companyService.getCompanies(query).subscribe((data) => {
            expect(data).toEqual(testData);
        })
        tick()
        const req = httpController.expectOne('http://localhost:8000/companies');
        expect(req.request.method).toEqual('GET');
        req.flush(testData)
    }))

    it('getCompanies should use GET for getting data', () => {
        companyService.getCompanies({}).subscribe()
        const req = httpController.expectOne('http://localhost:8000/companies');
        expect(req.request.method).toEqual('GET');
        
    })

    it('call getCompanies()', () => {
        const testData: ICompany[] = [];
        const errorMsg = 'status 500 error';
        companyService.getCompanies({}).subscribe((data) => fail('should have failed with 500 error'),
            (error: HttpErrorResponse) => {
                expect(error.status).toEqual(500, 'status');
                expect(error.error).toEqual(errorMsg, 'message')
            }
        )
        const req = httpController.expectOne('http://localhost:8000/companies');
        
        expect(req.request.method).toEqual('GET')
        req.flush(errorMsg, {status: 500, statusText: 'Server Error'})
    })

    it('getCompanies should return an empty object on error', () => {
        const testData: ICompany[] = [];

        companyService.getCompanies({}).subscribe((data) => {
            expect(data).toEqual(testData);
            
        })
        const req = httpController.expectOne('http://localhost:8000/companies');
        
        req.flush('error', {status: 500, statusText: 'Broken Service'})
    })
    
})