import { Alert } from './basic/Alert';
import { CaretDownArrow } from './basic/CaretDownArrow';
import { Checkmark } from './basic/Checkmark';
import { Checkmark2 } from './basic/Checkmark2';
import { Close } from './basic/Close';
import { Exit } from './basic/Exit';
import { FileUpload } from './basic/FileUpload';
import { GearCog } from './basic/GearCog';
import { BasicIcons } from './basic/index';
import { Search } from './basic/Search';
import { TrashCan } from './basic/TrashCan';
import { Upload as BasicUpload } from './basic/Upload';
import { Add } from './dual-light/Add';
import { AddCircle } from './dual-light/AddCircle';
import { Building } from './dual-light/Building';
import { ChevronDoubleForward } from './dual-light/ChevronDoubleForward';
import { Dashboard } from './dual-light/Dashboard';
import { Document } from './dual-light/Document';
import { Gift } from './dual-light/Gift';
import { Group } from './dual-light/Group';
import { Growth } from './dual-light/Growth';
import { Home } from './dual-light/Home';
import { Inbox } from './dual-light/Inbox';
import { DualLightIcons } from './dual-light/index';
import { Message } from './dual-light/Message';
import { Messages } from './dual-light/Messages';
import { Note } from './dual-light/Note';
import { Open } from './dual-light/Open';
import { Send } from './dual-light/Send';
import { Settings } from './dual-light/Settings';
import { Star } from './dual-light/Star';
import { Tool } from './dual-light/Tool';
import { Trash } from './dual-light/Trash';
import { Upload } from './dual-light/Upload';
import { Warning } from './dual-light/Warning';
export function getIcon(name) {
    switch (name) {
        case BasicIcons.Alert:
            return Alert;
        case BasicIcons.CaretDownArrow:
            return CaretDownArrow;
        case BasicIcons.Checkmark:
            return Checkmark;
        case BasicIcons.Checkmark2:
            return Checkmark2;
        case BasicIcons.Close:
            return Close;
        case BasicIcons.Exit:
            return Exit;
        case BasicIcons.FileUpload:
            return FileUpload;
        case BasicIcons.GearCog:
            return GearCog;
        case BasicIcons.Search:
            return Search;
        case BasicIcons.TrashCan:
            return TrashCan;
        case BasicIcons.Upload:
            return BasicUpload;
        case DualLightIcons.Add:
            return Add;
        case DualLightIcons.AddCircle:
            return AddCircle;
        case DualLightIcons.Building:
            return Building;
        case DualLightIcons.ChevronDoubleForward:
            return ChevronDoubleForward;
        case DualLightIcons.Dashboard:
            return Dashboard;
        case DualLightIcons.Document:
            return Document;
        case DualLightIcons.Gift:
            return Gift;
        case DualLightIcons.Growth:
            return Growth;
        case DualLightIcons.Group:
            return Group;
        case DualLightIcons.Home:
            return Home;
        case DualLightIcons.Inbox:
            return Inbox;
        case DualLightIcons.Message:
            return Message;
        case DualLightIcons.Messages:
            return Messages;
        case DualLightIcons.Note:
            return Note;
        case DualLightIcons.Open:
            return Open;
        case DualLightIcons.Send:
            return Send;
        case DualLightIcons.Settings:
            return Settings;
        case DualLightIcons.Star:
            return Star;
        case DualLightIcons.Tool:
            return Tool;
        case DualLightIcons.Trash:
            return Trash;
        case DualLightIcons.Upload:
            return Upload;
        case DualLightIcons.Warning:
            return Warning;
        default:
            return null;
    }
}
export { BasicIcons } from './basic/index';
export { DualLightIcons } from './dual-light/index';
//# sourceMappingURL=index.js.map