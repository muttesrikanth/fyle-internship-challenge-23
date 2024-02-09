import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('User details rendering', () => {
    it('should display the user image', () => {
      component.userdetails = {
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
      };
      fixture.detectChanges();
      const userImage = fixture.nativeElement.querySelector('.user-image');
      expect(userImage.src).toContain('https://avatars.githubusercontent.com/u/1?v=4');
    });


    it('should display the user name', () => {
      component.userdetails = {
        "name": "John Doe"
      }
      fixture.detectChanges();
      const userName = fixture.nativeElement.querySelector('.font-bold.text-3xl');
      expect(userName.textContent).toContain('John Doe');
    });

    it('should display the user bio', () => {
      component.userdetails = {
        "bio":"Software Developer"
      };
      fixture.detectChanges();
      const userBio = fixture.nativeElement.querySelector('#bio');
      expect(userBio.textContent).toContain('Software Developer');
    });

    it('should display the user location', () => {
      component.userdetails ={
        "location":'New York, USA'
      }
      fixture.detectChanges();
      const userLocation = fixture.nativeElement.querySelector('.text-red.wrap');
      expect(userLocation.textContent).toContain('New York, USA');
    });

    it('should display the user Twitter handle', () => {
      component.userdetails = {
        "twitter_username":"john_doe"
      }
      fixture.detectChanges();
      const userTwitterHandle = fixture.nativeElement.querySelector('#twitter');
      expect(userTwitterHandle.textContent).toContain('john_doe');
    });

  });

 
});
