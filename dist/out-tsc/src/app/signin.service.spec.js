import { TestBed, inject } from '@angular/core/testing';
import { SigninService } from './signin.service';
describe('SigninService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SigninService]
        });
    });
    it('should be created', inject([SigninService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=signin.service.spec.js.map