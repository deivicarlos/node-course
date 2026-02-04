export type OsType = 'windows' | 'linux' | 'macos';
export type HddOrder = 'asc' | 'desc';

export type Device = {
  id: number;
  name: string;
  hddGB: number;
  hddLabel: string;
  osType: OsType;
  osLabel: string;
};

export interface Device2 {
  id: number;
  name: string;
  hddGB: number;
  hddLabel: string;
  osType: OsType;
  osLabel: string;
}

export const DEVICES: Device[] = [
  {
    id: 1,
    name: 'Workstation-01',
    hddGB: 1000,
    hddLabel: '1TB SSD',
    osType: 'windows',
    osLabel: 'Windows 11 Pro',
  },
  {
    id: 2,
    name: 'Workstation-02',
    hddGB: 2000,
    hddLabel: '2TB HDD',
    osType: 'windows',
    osLabel: 'Windows 10 Pro',
  },
  {
    id: 3,
    name: 'Laptop-Dev-01',
    hddGB: 512,
    hddLabel: '512GB SSD',
    osType: 'linux',
    osLabel: 'Ubuntu 24.04 LTS',
  },
  {
    id: 4,
    name: 'Laptop-Dev-02',
    hddGB: 1000,
    hddLabel: '1TB SSD',
    osType: 'linux',
    osLabel: 'Fedora 41',
  },
  {
    id: 5,
    name: 'MacBook-Design-01',
    hddGB: 512,
    hddLabel: '512GB SSD',
    osType: 'macos',
    osLabel: 'macOS Sequoia',
  },
  {
    id: 6,
    name: 'MacBook-Design-02',
    hddGB: 1000,
    hddLabel: '1TB SSD',
    osType: 'macos',
    osLabel: 'macOS Sequoia',
  },
  {
    id: 7,
    name: 'QA-Desktop-01',
    hddGB: 256,
    hddLabel: '256GB SSD',
    osType: 'windows',
    osLabel: 'Windows 10 Pro',
  },
  {
    id: 8,
    name: 'QA-Desktop-02',
    hddGB: 512,
    hddLabel: '512GB SSD',
    osType: 'windows',
    osLabel: 'Windows 11 Pro',
  },
  {
    id: 9,
    name: 'Server-Lab-01',
    hddGB: 2048,
    hddLabel: '2TB SSD',
    osType: 'linux',
    osLabel: 'Ubuntu Server 22.04',
  },
  {
    id: 10,
    name: 'Server-Lab-02',
    hddGB: 4096,
    hddLabel: '4TB HDD',
    osType: 'linux',
    osLabel: 'Debian 12',
  },
  {
    id: 11,
    name: 'Field-Tablet-01',
    hddGB: 256,
    hddLabel: '256GB SSD',
    osType: 'windows',
    osLabel: 'Windows 11 Pro',
  },
  {
    id: 12,
    name: 'Field-Tablet-02',
    hddGB: 128,
    hddLabel: '128GB SSD',
    osType: 'windows',
    osLabel: 'Windows 10 Pro',
  },
  {
    id: 13,
    name: 'Nuc-Edge-01',
    hddGB: 512,
    hddLabel: '512GB SSD',
    osType: 'linux',
    osLabel: 'Ubuntu 24.04 LTS',
  },
  {
    id: 14,
    name: 'Nuc-Edge-02',
    hddGB: 1000,
    hddLabel: '1TB SSD',
    osType: 'linux',
    osLabel: 'Rocky Linux 9',
  },
  {
    id: 15,
    name: 'Kiosk-Front-01',
    hddGB: 256,
    hddLabel: '256GB SSD',
    osType: 'windows',
    osLabel: 'Windows 11 Home',
  },
  {
    id: 16,
    name: 'Kiosk-Front-02',
    hddGB: 256,
    hddLabel: '256GB SSD',
    osType: 'windows',
    osLabel: 'Windows 11 Pro',
  },
  {
    id: 17,
    name: 'Analytics-Node-01',
    hddGB: 2048,
    hddLabel: '2TB SSD',
    osType: 'linux',
    osLabel: 'Ubuntu Server 22.04',
  },
  {
    id: 18,
    name: 'Analytics-Node-02',
    hddGB: 1000,
    hddLabel: '1TB HDD',
    osType: 'linux',
    osLabel: 'Debian 12',
  },
  {
    id: 19,
    name: 'Spare-Laptop-01',
    hddGB: 256,
    hddLabel: '256GB SSD',
    osType: 'windows',
    osLabel: 'Windows 11 Pro',
  },
  {
    id: 20,
    name: 'Spare-Laptop-02',
    hddGB: 512,
    hddLabel: '512GB SSD',
    osType: 'linux',
    osLabel: 'Pop!_OS 22.04',
  },
];
