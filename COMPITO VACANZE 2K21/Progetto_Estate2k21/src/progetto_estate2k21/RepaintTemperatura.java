/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package progetto_estate2k21;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author lucab
 */
public class RepaintTemperatura extends Thread{
    
    HomePage frame;

    public RepaintTemperatura(HomePage frame) {
        this.frame = frame;
    }

    @Override
    public void run() {
        while(true){
            frame.repaint();
            
            try {
                Thread.sleep(100);
            } catch (InterruptedException ex) {
                Logger.getLogger(RepaintTemperatura.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    
    
    
}
