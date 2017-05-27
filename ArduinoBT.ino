include <Wire.h>
#include <Time.h>
#include <DS1307RTC.h>

char command;
String string;
#define lock1 7
#define lock2 12

int onTimeSetH, offTimeSetH, onTimeSetM, offTimeSetM;
String hOnString, mOnString, hOffString, mOffString; 

tmElements_t tm;
void setup() {
  Serial.begin(9600);
  while (!Serial) ; 
  delay(10); 
  pinMode(lock1, OUTPUT);
  pinMode(lock2, OUTPUT);
  }

}

void loop() {
  tm;

  if (RTC.read(tm)) {
    Serial.print("Time Date = ");
    print2digits(hourFormat12(tm.Hour));
    Serial.write(':');
    print2digits(tm.Minute);
    Serial.write(':');
    print2digits(tm.Second);
    Serial.print("  ");
    Serial.print(tm.Day);
    Serial.write('/');
    Serial.print(tm.Month);
    Serial.write('/');
    Serial.print(tmYearToCalendar(tm.Year));
    Serial.println();
  } else {
    if (RTC.chipPresent()) {
      Serial.println("Real Time Clock Module not Present");
    } else {
      Serial.println("Real Time CLock read error!  Please check the circuitry.");
      }
    delay(10);
  }
  delay(500);
  

  if (Serial.available() > 0){
          string = "";
  }
  while(Serial.available() > 0){
     command = ((byte)Serial.read());
      
      if(command == ':')
      {
        break;
      }      
      else
      {
        string += command;
       
        
      }
      
      delay(1);
    }  
     Serial.println(string);
     if(string == "TO"){
  lock1On();
     Serial.println(string); 
  }  
if(string =="TF"){
  lock2Off();
    Serial.println(string); 
}

}
