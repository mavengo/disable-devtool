/*
 * @Author: tackchen
 * @Date: 2021-11-15 22:26:57
 * @LastEditors: tackchen
 * @LastEditTime: 2022-01-05 09:02:19
 * @FilePath: /disable-devtool/src/detector/date-to-string.js
 * @Description: Coding something
 */

import {registInterval} from '../utils/interval';
import {DETECTOR_TYPE, triggerOnDevOpen} from './detector';
import {clearLog, log} from '../utils/log';
 
export default function detector (isTrueIOSChrome) {
    if (isTrueIOSChrome) return;
    let count = 0;
    const date = new Date();
    date.toString = () => {
        count ++;
        return '';
    };

    const checkIsOpen = () => {
        count = 0;
        log(date);
        clearLog();
        if (count >= 2) {
            triggerOnDevOpen(DETECTOR_TYPE.DATE_TO_STRING);
        }
    };

    registInterval(checkIsOpen);
}