import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.page.html',
  styleUrls: ['./device-list.page.scss'],
})
export class DeviceListPage implements OnInit {
  devices =
  [
    {
    name:'Test',
    isOnline:true,
  },
    {
    name:'Car',
    isOnline:true,
  },
    {
    name:'Device',
    isOnline:true,
  },
    {
    name:'Test',
    isOnline:true,
  },
    {
    name:'CE',
    isOnline:false,
  },
    {
    name:'Test',
    isOnline:true,
  },
    {
    name:'Test',
    isOnline:true,
  },
    {
    name:'RM',
    isOnline:false,
  },
    {
    name:'Test',
    isOnline:true,
  },
    {
    name:'OT',
    isOnline:false,
  },
    {
    name:'Test',
    isOnline:true,
  },
    {
    name:'Test',
    isOnline:true,
  },
]

deviceList: any;

  constructor() { }

  ngOnInit() {
    this.deviceList = this.devices
  }

  segmentChanged(ev: any) {
    if(ev.detail.value == 'online'){
      this.deviceList = this.devices.filter((d)=>{
        return d.isOnline == true;
      })
    }
    else if(ev.detail.value == 'offline'){
      this.deviceList = this.devices.filter((d)=>{
        return d.isOnline == false;
      })
    }
    else{
      this.deviceList = this.devices
    }
  }

  handleOneDevice(device){
    console.log(device);
    

  }

}
