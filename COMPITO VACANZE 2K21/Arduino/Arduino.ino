#include <DHT.h>
#include <LiquidCrystal.h>
const int rs = 12, en=11,d4=5,d5=4,d6=3,d7=2;
LiquidCrystal lcd (rs,en,d4,d5,d6,d7);
#include "DHT.h"
#define DHTPIN 6
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
int motorPin = 9;
int temperatura = 0;
bool controlloAccAuto = false;

void setup() {
  Serial.begin(9600); 
  pinMode(motorPin, OUTPUT); 
  lcd.begin(16,2);
}

void loop() {
  lcd.clear();
  Gestione();
  delay(1000);
}

void LeggiEScriviTemperatura(){
  temperatura = dht.readTemperature();
  String str = String(temperatura) + ";";
  if(str.length() < 3)
  {
    if(str.length() == 2)
      str = "0" + str;
  }
  Serial.print(str);
}

void Gestione()
{
  LeggiEScriviTemperatura();
  String comando = leggiFinoA(';');
  String controllo = splitString(comando, ',', 0);
  String numero = splitString(comando, ',', 1);
  
  
  if(controllo == "s" || controllo == "m" || controllo == "h"){
    PartenzaRitardata(controllo, numero.toInt());
    
  }
  else if(controllo == "a" || controlloAccAuto == true){
    AccensioneAutomatica(numero.toInt());
    controlloAccAuto = true;
  }
  else if(controllo == "v"){
    VelocitaVentola(numero.toInt());
  }
  else if(controllo == "on"){
    tone(10,400,50);
    delay(100);
    tone(10,500,50);
    delay(100);
    tone(10,600,50);
    analogWrite(motorPin, 66);
    lcd.clear();
    lcd.setCursor(1,0);
    lcd.print("CONDIZIONATORE");
    lcd.setCursor(5,1);
    lcd.print("ACCESO");
    delay(1000);
  }
  else if(controllo == "off"){
    tone(10,600,50);
    delay(100);
    tone(10,500,50);
    delay(100);
    tone(10,400,50);
    analogWrite(motorPin, 0);
    lcd.clear();
    lcd.setCursor(1,0);
    lcd.print("CONDIZIONATORE");
    lcd.setCursor(5,1);
    lcd.print("SPENTO");
    delay(1000);
  }
}

String leggiFinoA(char terminatore)
{
  String r="";
  int i = 0;
  while(true && i < 10000)
  {
    if(Serial.available()>0)
    {
      char c= Serial.read();
      if(c==terminatore)
      {
        return r;
      }else{
        r += c;
      }
    }
    i++;
  }
  return r;
}

String splitString(String str, char sep, int index)
{
 int found = 0;
 int strIdx[] = { 0, -1 };
 int maxIdx = str.length() - 1;

 for (int i = 0; i <= maxIdx && found <= index; i++)
 {
    if (str.charAt(i) == sep || i == maxIdx)
    {
      found++;
      strIdx[0] = strIdx[1] + 1;
      strIdx[1] = (i == maxIdx) ? i+1 : i;
    }
 }
 return found > index ? str.substring(strIdx[0], strIdx[1]) : "";
}

void AccensioneAutomatica(int numero){
  bool controllo = true;
  int temp = 0;
  tone(10,400,100);
  delay(1000);
  tone(10,400,100);
  delay(1000);
  tone(10,400,100);
  while(controllo){
    temp = dht.readTemperature();
    if(temp > numero){
      analogWrite(motorPin, 132);
    }
    if(temp == numero){
      analogWrite(motorPin, 66);
    }
    else if(temp < numero) {
      analogWrite(motorPin, 0);
      controllo = false;
    }
    else if(leggiFinoA(';') != ""){
      controllo = false;
      controlloAccAuto = false;
    }
  }
}

void PartenzaRitardata(String controllo, int numero){
  int ritardo = 0;
  tone(10,400,100);
  delay(1000);
  tone(10,400,100);
  if(controllo == "h"){
    ritardo = numero * (3600*1000);
    lcd.clear();
    lcd.setCursor(3,0);
    lcd.print("Accensione");
    lcd.setCursor(2,1);
    lcd.print("ritardata:ON");
    delay(ritardo);
    analogWrite(motorPin, 66);
  }
  else if(controllo == "m"){
    lcd.print("CIAO");
    delay(1000);
    ritardo = numero * 60000;
    lcd.clear();
    lcd.setCursor(3,0);
    lcd.print("Accensione");
    lcd.setCursor(2,1);
    lcd.print("ritardata:ON");
    delay(ritardo);
    analogWrite(motorPin, 66);
  }
  else if(controllo == "s"){
    ritardo = numero * 1000;
    lcd.clear();
    lcd.setCursor(3,0);
    lcd.print("Accensione");
    lcd.setCursor(2,1);
    lcd.print("ritardata:ON");
    delay(ritardo);
    analogWrite(motorPin, 66);
  }
}

void VelocitaVentola(int numero){
  if(numero == 1){
    tone(10,400,100);
    analogWrite(motorPin, 66);
  }
  else if(numero == 2){
    tone(10,400,100);
    analogWrite(motorPin, 132);
  }
  else if(numero == 3){
    tone(10,400,100);
    analogWrite(motorPin, 254);
  }
}
