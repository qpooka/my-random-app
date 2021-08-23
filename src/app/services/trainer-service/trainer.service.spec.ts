import { HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Trainer } from 'src/app/models/trainer-model';
import { environment } from 'src/environments/environment';

import { TrainerService } from './trainer.service';

let mockTrainer: Trainer;

fdescribe('TrainerService', () => {
  let service: TrainerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(TrainerService);
    httpMock = TestBed.inject(HttpTestingController);
    mockTrainer = new Trainer();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a trainer when called', (done: DoneFn) => {
    service.createTrainer().subscribe((trainer) => {
      expect(trainer).toEqual(mockTrainer);
      done();
    });
    const httpHeader: HttpHeaders = new HttpHeaders()
    const mockResponse: HttpResponse<Trainer> = new HttpResponse({
      body : mockTrainer,
      headers: httpHeader,
    });
    const req = httpMock.expectOne(`${environment.trainerRoute}/trainers`)
    req.flush(mockResponse);
  });

  it('failure case? idk how that would happen tho', () =>  {

  });

  it('should return current trainer money when called successfully', (done: DoneFn) => {
    service.getTrainerMoney(1).subscribe((money) => {
      expect(money).toEqual(1000);
      done();
    });

    const req = httpMock.expectOne(`${environment.trainerRoute}/trainers/1/money`);
    req.flush(1000);
  });

  it('should return new trainer money when called successfully', (done: DoneFn) => {
    service.saveTrainerMoney(1, 2000).subscribe((money) => {
      expect(money).toEqual(2000);
      done();
    });

    const header: HttpHeaders = new HttpHeaders();
    const mockResponse: HttpResponse<number> = new HttpResponse({
      body: 2000,
      headers: header,
    })
    const req = httpMock.expectOne(`${environment.trainerRoute}?id=1&money=2000`);
    req.flush(mockResponse);
  });

});
