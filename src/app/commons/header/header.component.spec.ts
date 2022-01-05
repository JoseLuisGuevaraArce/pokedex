import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { StyleManagerService } from './style-manager.service';

describe('Header Component', () => {
  let component: HeaderComponent,
    fixture: ComponentFixture<HeaderComponent>,
    themeService: StyleManagerService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        providers: [{provide: StyleManagerService}]
      });
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      themeService = TestBed.inject(StyleManagerService);
      spyOn(component.onSearchText, 'emit');
    });

    it('should create', () => {
      expect(component).toBeDefined();
    });

    it('should search pokemon', () => {
      component.onSearch('bulbasaur');
      expect(component.onSearchText.emit).toHaveBeenCalledWith('bulbasaur')
    });
});