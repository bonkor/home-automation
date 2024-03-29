import { ZwaveDashboardShortNodeType } from '~/store/dashboard/viewModels/IZwaveDashboardNode';
import { INode } from '~/store/dashboard/viewModels/Types';
import ZW100Widget from './zwave/ZW100/model/Widget';
import TF021 from './zwave/TF021/model/Widget';
// FIBARO System \ FGS223 Double Relay
import FGRM222 from './zwave/FGRM222/model/Widget';
import WS02Z from './zwave/WS02Z/model/Widget';
import PAN05 from './zwave/PAN05/model/Widget';
import FGS212 from './zwave/FGS212/model/Widget';
import FGS223 from './zwave/FGS223/model/Widget';
// Danfoss \ Popp Radiator Thermostat
import POPPR from './zwave/POPPR/model/Widget';
import FGD212 from './zwave/FGD212/model/Widget';
import PSG01 from './zwave/PSG01/model/Widget';
// Horstmann (Secure Meters) \ SRT-321 Thermostat-HVAC
import SRT321 from './zwave/SRT321/model/Widget';
// Danfoss \ RS Room Sensor
import ZHD01 from './zwave/ZHD01/model/Widget';
// EUROtronic \ EUR_SPIRITZ Wall Radiator Thermostat
import ESWRT from './zwave/ESWRT/model/Widget';
import ZTEMP2 from './zwave/ZTEMP2/model/Widget';
import FIBHC from './zwave/FIBHC/model/Widget';
// Shenzhen Neo Electronics Co Ltd \ Door/Window Detector
import NDS from './zwave/NDS/model/Widget';

function mapper(node: ZwaveDashboardShortNodeType): INode | null {
    if (
        node.manufacturerid === '0x0086' &&
        node.producttype === '0x1a02' &&
        node.productid === '0x0064'
    )
        return new ZW100Widget(node);
    if (
        node.manufacturerid === '0x019b' &&
        node.producttype === '0x0001' &&
        node.productid === '0x0001'
    )
        return new TF021(node);
    if (
        // FIBARO System \ FGS223 Double Relay
        node.manufacturerid === '0x010f' &&
        node.producttype === '0x0302' &&
        node.productid === '0x4000'
    )
        return new FGRM222(node);
    if (
        node.manufacturerid === '0x0258' &&
        node.producttype === '0x0003' &&
        node.productid === '0x2085'
    )
        return new WS02Z(node);
    if (
        node.manufacturerid === '0x013c' &&
        node.producttype === '0x0001' &&
        node.productid === '0x0010'
    )
        return new PAN05(node);
    if (
        node.manufacturerid === '0x010f' &&
        node.producttype === '0x0402' &&
        node.productid === '0x4002'
    )
        return new FGS212(node);
    if (
        node.manufacturerid === '0x010f' &&
        node.producttype === '0x0203' &&
        node.productid === '0x4000'
    )
        return new FGS223(node);
    if (
        // Danfoss \ Popp Radiator Thermostat
        node.manufacturerid === '0x0002' &&
        node.producttype === '0x0115' &&
        node.productid === '0xa010'
    )
        return new POPPR(node);
    if (
        node.manufacturerid === '0x010f' &&
        node.producttype === '0x0102' &&
        node.productid === '0x4000'
    )
        return new FGD212(node);
    if (
        node.manufacturerid === '0x013c' &&
        node.producttype === '0x0002' &&
        node.productid === '0x001e'
    )
        return new PSG01(node);
    if (
        // Horstmann (Secure Meters) \ SRT-321 Thermostat-HVAC
        node.manufacturerid === '0x0059' &&
        node.producttype === '0x0001' &&
        node.productid === '0x0005'
    )
        return new SRT321(node);
    if (
        // Danfoss \ RS Room Sensor
        node.manufacturerid === '0x0002' &&
        node.producttype === '0x0003' &&
        node.productid === '0x8010'
    )
        return new ZHD01(node);
    if (
        // EUROtronic \ EUR_SPIRITZ Wall Radiator Thermostat
        node.manufacturerid === '0x0148' &&
        node.producttype === '0x0003' &&
        node.productid === '0x0001'
    )
        return new ESWRT(node);
    if (
        node.manufacturerid === '0x019b' &&
        node.producttype === '0x0004' &&
        node.productid === '0x0204'
    )
        return new ZTEMP2(node);
    if (
        node.manufacturerid === '0x010f' &&
        node.producttype === '0x1301' &&
        node.productid === '0x4001'
    )
        return new FIBHC(node);
    if (
        // Shenzhen Neo Electronics Co Ltd \ Door/Window Detector
        node.manufacturerid === '0x0258' &&
        node.producttype === '0x0003' &&
        node.productid === '0x2082'
    )
        return new NDS(node);
    return null;
}

export default mapper;
