import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Header Component', () => {
  let component: HeaderComponent,
    fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
      });
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      spyOn(component.onSearchText, 'emit');
    });

    it('should create', () => {
      expect(component).toBeDefined();
    });

    it('should create', () => {
      component.onSearch('bulbasaur');
      expect(component.onSearchText.emit).toHaveBeenCalledWith('bulbasaur')
    });
});