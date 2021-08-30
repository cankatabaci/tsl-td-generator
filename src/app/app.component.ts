import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

interface Takim {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Süper Lig Teknik Direktör Generator';
  imagePath:string = '';
  showImage:boolean = false;
  imageDescription:string = '';
  selectedTeam:any = '';
  newArr:any[] = []

  ngOnInit(): void {
    for(var i = 0 ; i < this.tdNames.length; i++){
      this.newArr[i] = {};
      this.newArr[i]['name'] = this.tdNames[i].name;
      this.newArr[i]['img'] = this.imgRand();
    }
 }

 tdNames = [
   {name : 'Çağdaş Atan', img: 'assets/images/cagdasatan.jpg'},
   {name : 'Samet Aybaba', img: 'assets/images/sametaybaba.jpg'},
   {name : 'Bülent Korkmaz', img: 'assets/images/bulentkorkmaz.jpg'},
   {name : 'Emre Belözoğlu', img: 'assets/images/emrebelozoglu.jpg'},
   {name : 'Fuat Çapa', img: 'assets/images/fuatcapa.jpg'},
   {name : 'Hamza Hamzaoğlu', img: 'assets/images/hamzahamzaoglu.jpg'},
   {name : 'İsmail Kartal', img: 'assets/images/ismailkartal.jpg'},
   {name : 'Kemal Özdeş', img: 'assets/images/kemalozdes.jpg'},
   {name : 'Mesut Bakkal', img: 'assets/images/mesutbakkal.jpg'},
   {name : 'Okan Buruk', img: 'assets/images/okanburuk.jpg'},
   {name : 'Yılmaz Vural', img: 'assets/images/yilmazvural.jpg'},
 ];


  imgRand(){
    var path = 'assets/images/';
    var num = Math.floor( Math.random() * this.tdNames.length );
    var img = this.tdNames[ num ];
    var imgPath = img;

    return imgPath;
 }

 generate(){
   if(this.selectedTeam == ''){

   } else{
     console.log(this.selectedTeam);
    var image = this.imgRand()
    this.imagePath = image.img;
    var sozlesmeYili = this.getSozlesmeYili();
    this.imageDescription = 'SON DAKİKA! ' + this.selectedTeam + ' ' + image.name + ' ile ' + sozlesmeYili +' yıllık sözleşme imzaladı';
    this.showImage = true;
   }
 }

 getSozlesmeYili(){
   var baslangic = Math.floor(Math.random()*(6-1+1)+1);
   var opsiyon = 1;
   var text = '' + baslangic + '+' + opsiyon;

   return text;
 }

 clean(){
   this.showImage = false;
 }

  takimlar: Takim[] = [
    {value: 'Kasımpaşa', viewValue: 'Kasımpaşa'},
    {value: 'Konyaspor', viewValue: 'Konyaspor'},
    {value: 'Giresunspor', viewValue: 'Giresunspor'},
    {value: 'Başakşehir', viewValue: 'Başakşehir'},
    {value: 'Alanyaspor', viewValue: 'Alanyaspor'},
    {value: 'Adana Demirspor', viewValue: 'Adana Demirspor'},
    {value: 'Göztepe', viewValue: 'Göztepe'},
    {value: 'Kayserispor', viewValue: 'Kayserispor'},
    {value: 'Gaziantep', viewValue: 'Gaziantep'},
    {value: 'Antalyaspor', viewValue: 'Antalyaspor'},
    {value: 'Hatayspor', viewValue: 'Hatayspor'},
    {value: 'Çaykur Rizespor', viewValue: 'Çaykur Rizespor'},
    {value: 'Galatasaray', viewValue: 'Galatasaray'},
    {value: 'Fenerbahçe', viewValue: 'Fenerbahçe'},
    {value: 'Beşiktaş', viewValue: 'Beşiktaş'},
    {value: 'Trabzonspor', viewValue: 'Trabzonspor'},
    {value: 'Fatih Karagümrük', viewValue: 'Fatih Karagümrük'},
    {value: 'Sivasspor', viewValue: 'Sivasspor'},
    {value: 'Yeni Malatyaspor', viewValue: 'Yeni Malatyaspor'},
    {value: 'Altay', viewValue: 'Altay'}
  ];


}
