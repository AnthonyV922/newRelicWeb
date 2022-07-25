
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { setDefaultService } from 'selenium-webdriver/chrome';
import { ICommunication } from './communication'
@Injectable({
    providedIn: 'root'
})
export class CommunicationSubjectService {
    subject = new Subject()

    setData(data: ICommunication) {
        this.subject.next(data)
    }


}