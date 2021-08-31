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
  tdNamesFiltered:any[] = [];

  ngOnInit(): void {

    this.tdNamesAll.forEach(element => {
      if(element.isActive == true){
        this.tdNamesFiltered.push(element);
      }
    });
 }

 tdNamesAll = [
   {name : 'Çağdaş Atan', img: 'assets/images/cagdasatan.jpg', isActive: true},
   {name : 'Samet Aybaba', img: 'assets/images/sametaybaba.jpg', isActive: true},
   {name : 'Bülent Korkmaz', img: 'assets/images/bulentkorkmaz.jpg', isActive: true},
   {name : 'Emre Belözoğlu', img: 'assets/images/emrebelozoglu.jpg', isActive: true},
   {name : 'Fuat Çapa', img: 'assets/images/fuatcapa.jpg', isActive: true},
   {name : 'Hamza Hamzaoğlu', img: 'assets/images/hamzahamzaoglu.jpg', isActive: true},
   {name : 'İsmail Kartal', img: 'assets/images/ismailkartal.jpg', isActive: true},
   {name : 'Kemal Özdeş', img: 'assets/images/kemalozdes.jpg', isActive: true},
   {name : 'Mesut Bakkal', img: 'assets/images/mesutbakkal.jpg', isActive: true},
   {name : 'Okan Buruk', img: 'assets/images/okanburuk.jpg', isActive: true},
   {name : 'Yılmaz Vural', img: 'assets/images/yilmazvural.jpg', isActive: true},
   {name : 'Mehmet Özdilek', img: 'assets/images/mehmetozdilek.jpg', isActive: true},
   {name : 'Hüseyin Cimsir', img: 'assets/images/huseyincimsir.jpg', isActive: true},
   {name : 'Mustafa Kaplan', img: 'assets/images/mustafakaplan.jpg', isActive: true},
   {name : 'Hakan Kutlu', img: 'assets/images/hakankutlu.jpg', isActive: true},
   {name : 'Safet Susic', img: 'assets/images/saffetsusic.jpg', isActive: true},
   {name : 'Tamer Tuna', img: 'assets/images/tamertuna.jpg', isActive: true},
   {name : 'Tayfur Havutcu', img: 'assets/images/tayfurhavutcu.jpg', isActive: true},
   {name : 'Ibrahim Üzülmez', img: 'assets/images/ibrahimuzulmez.jpg', isActive: true},
   {name : 'Fatih Terim', img: 'assets/images/fatihterim.jpg', isActive: false},
   {name : 'Riza Calimbay', img: 'assets/images/rizacalimbay.jpg', isActive: false},
   {name : 'Ünal Karaman', img: 'assets/images/unalkaraman.jpg', isActive: true},
   {name : 'Marius Sumudica', img: 'assets/images/sumudica.jpg', isActive: true},
   {name : 'Ertuğrul Sağlam', img: 'assets/images/ertugrulsaglam.jpg', isActive: true},
   {name : 'Mustafa Er', img: 'assets/images/mustafaer.jpg', isActive: true},
   {name : 'Hüseyin Cimşir', img: 'assets/images/huseyincimsir.jpg', isActive: true},
   {name : 'Tayfun Korkut', img: 'assets/images/tayfunkorkut.jpg', isActive: true},
   {name : 'Christoph Daum', img: 'assets/images/daum.jpg', isActive: true},
   {name : 'Ali Tandoğan', img: 'assets/images/alitandogan.jpg', isActive: true},
   {name : 'Ümit Özat', img: 'assets/images/umitozat.jpg', isActive: true},
   {name : 'Ahmet Taşyürek', img: 'assets/images/ahmettasyurek.jpg', isActive: true},
   {name : 'Giray Bulak', img: 'assets/images/giraybulak.jpg', isActive: true},
   {name : 'Engin İpekoğlu', img: 'assets/images/enginipekoglu.jpg', isActive: true},
   {name : 'Karl-Heinz Feldkamp', img: 'assets/images/feldkamp.jpg', isActive: true},
   {name : 'Werner Lorant', img: 'assets/images/wernerlorant.jpg', isActive: true},
   {name : 'Ziya Dogan', img: 'assets/images/ziyadogan.jpg', isActive: true},
   {name : 'Michael Skibbe', img: 'assets/images/skibbe.jpg', isActive: true},
   {name : 'Yücel Ildiz', img: 'assets/images/yucelildiz.jpg', isActive: true},
 ];


  imgRand(){
    var path = 'assets/images/';
    var num = Math.floor( Math.random() * this.tdNamesFiltered.length );
    var img = this.tdNamesFiltered[ num ];
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
