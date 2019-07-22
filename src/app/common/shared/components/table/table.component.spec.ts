import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { EllipsisPipe } from 'src/app/common/utility/pipes/ellipsis/ellipsis.pipe';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, EllipsisPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.data = [];
    component.columns = [];
    fixture.detectChanges();
  });

  /** Smoke test */
  it('renders without crushing', () => {
    expect(component).toBeTruthy();
  });
});
