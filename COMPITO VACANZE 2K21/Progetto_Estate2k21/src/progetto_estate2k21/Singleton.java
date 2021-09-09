/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package progetto_estate2k21;

import java.util.ArrayList;

/**
 *
 * @author lucab
 */
public class Singleton {
    Seriale sp;
    public static Singleton _instance = null;

    private Singleton() {
        sp = new Seriale("COM3");
    }
    
    public Seriale getSerial(){
        return sp;
    }
    
    public static Singleton GetInstance()
    {
        if(_instance == null)
        {
            synchronized(Singleton.class)
            {
                if(_instance == null)
                {
                    _instance = new Singleton();
                }
            }
        }
        return _instance;
    }
}
