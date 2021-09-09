/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package progetto_estate2k21;

import java.io.IOException;
import com.fazecast.jSerialComm.SerialPort;
import java.io.InputStream;
import com.fazecast.jSerialComm.SerialPortEvent;
import com.fazecast.jSerialComm.SerialPortDataListener;
import com.fazecast.jSerialComm.SerialPortIOException;
import com.fazecast.jSerialComm.SerialPortPacketListener;
import java.awt.Graphics;
import java.awt.Image;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author lucab
 */

//read serial
final class PacketListener implements SerialPortPacketListener
{
   String str = "";
   @Override
   public int getListeningEvents() { return SerialPort.LISTENING_EVENT_DATA_RECEIVED; }

   @Override
   public int getPacketSize() { return 3; }
   
   @Override
   public synchronized void serialEvent(SerialPortEvent event)
   {
      byte[] newData = event.getReceivedData();
      
      for (int i = 0; i < newData.length; ++i)
         str += (char)newData[i];
   }
   
   public synchronized String getCSV(){
       return str;
   }
}

public class Seriale extends Thread{

    SerialPort sp;
    int temperatura = 0;
    int ignore = 3;
    
    public Seriale(String nome){

        sp = SerialPort.getCommPort(nome); 
        sp.setComPortParameters(9600, 8, 1, 0); // default connection settings for Arduino
        sp.setComPortTimeouts(SerialPort.TIMEOUT_WRITE_BLOCKING, 0, 0); // block until bytes can be written
        if (sp.openPort()) {
            System.out.println("Port is open :)");
        } else {
            System.out.println("Failed to open port :(");
            return;
        }
    }

    public boolean isOpen(){
        if(sp.isOpen())
            return true;
        return false;
    }

    //write serial
    public void writeSerial(String toPrint) {
        try {
            byte[] vectInfo = toPrint.getBytes();
            sp.getOutputStream().write(vectInfo);
        } catch (IOException ex) {
            System.out.println(ex);
        }
    }

    static public SerialPort[] GetPorts() {
        return SerialPort.getCommPorts();
    }

    @Override
    public void run() {
        String str="";
        int i = 0;
        while(true){
            PacketListener pl = new PacketListener();
            sp.addDataListener(pl);
            do{
                str = pl.getCSV();
            }while(str == "");
            i++;
            if(i > ignore){
                System.out.println(str);
                String[] splittedString = str.split(";");
                temperatura = Integer.parseInt(splittedString[0]);
            }    
            sp.removeDataListener();
        }
    }
    
    

}
