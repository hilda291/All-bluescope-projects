import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTojsonComponent } from './json-tojson.component';

describe('JsonTojsonComponent', () => {
  let component: JsonTojsonComponent;
  let fixture: ComponentFixture<JsonTojsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonTojsonComponent]
    });
    fixture = TestBed.createComponent(JsonTojsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
