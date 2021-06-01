/**
 *区域告警
 *判定点是否在面内
 * @param checkPoint 点
 * @param polygonPoints 多边形 数组
 */
export function isInPolygon(checkPoint, polygonPoints) {
    let counter = 0;
    let i;
    let xinters;
    let p1, p2;
    let pointCount = polygonPoints.length;
    p1 = polygonPoints[0];

    for (i = 1; i <= pointCount; i++) {
        p2 = polygonPoints[i % pointCount];
        if (
            checkPoint[0] > Math.min(p1[0], p2[0]) &&
            checkPoint[0] <= Math.max(p1[0], p2[0])
        ) {
            if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
                if (p1[0] != p2[0]) {
                    xinters =
                        ((checkPoint[0] - p1[0]) * (p2[1] - p1[1])) / (p2[0] - p1[0]) +
                        p1[1];
                    if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
                        counter++;
                    }
                }
            }
        }
        p1 = p2;
    }
    if (counter % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

/**
 *计算圆弧
 * @param center 中心点 数组
 * @param radius 半径
 * @param startAngle 起始角度
 * @param endAngle 终止角度
 * @param pointNum 圆弧上点的个数
 */
export function getPoints(center, radius, startAngle, endAngle, pointNum) {
    let sin;
    let cos;
    let x;
    let y;
    let angle;
    radius = radius / 100;
    let points = new Array();
    points.push(center);
    for (let i = 0; i <= pointNum; i++) {
        angle = startAngle + ((endAngle - startAngle) * i) / pointNum;
        sin = Math.sin((angle * Math.PI) / 180);
        cos = Math.cos((angle * Math.PI) / 180);
        y = center[0] + radius * cos;
        x = center[1] + radius * sin;
        points[i] = [y, x];
        // debugger;
    }
    let point = points;
    point.push(center);
    return point;
}

/**
 * 计算角度
 * @param startx
 * @param starty
 * @param endx
 * @param endy
 * @returns {number}
 */
export function getAngle(startx, starty, endx, endy) {
    let tan = 0;
    if (endx == startx) {
        tan = 90;
    } else {
        tan =
            (Math.atan(Math.abs((endy - starty) / (endx - startx))) * 180) /
            Math.PI;
        // console.log(tan);
    }

    if (endx >= startx && endy >= starty) {
        //第一象限
        return -tan;
    } else if (endx > startx && endy < starty) {
        //第四象限
        return tan;
    } else if (endx < startx && endy > starty) {
        //第二象限
        return tan - 180;
    } else {
        return 180 - tan; //第三象限
    }
}

/**
 * 计算两点间的距离
 * @param {Number} pxA A点纬度
 * @param {Number} pyA A点经度
 * @param {Number} pxB B点纬度
 * @param {Number} pyB B点经度
 */
export function getDistance(pxA, pyA, pxB, pyB) {
    return Math.sqrt(Math.pow(pxA - pxB, 2) + Math.pow(pyA - pyB, 2));
}

/***************************************
 * 生成从minNum到maxNum的随机数。
 * 如果指定decimalNum个数，则生成指定小数位数的随机数
 * 如果不指定任何参数，则生成0-1之间的随机数。
 *
 * @minNum：[数据类型是Integer]生成的随机数的最小值（minNum和maxNum可以调换位置）
 * @maxNum：[数据类型是Integer]生成的随机数的最大值
 * @decimalNum：[数据类型是Integer]如果生成的是带有小数的随机数，则指定随机数的小数点后的位数
 *
 ****************************************/
export function randomNum(maxNum, minNum, decimalNum) {
    let max = 0,
        min = 0,
        randomNum;
    minNum <= maxNum ?
        ((min = minNum), (max = maxNum)) :
        ((min = maxNum), (max = minNum));
    switch (arguments.length) {
        case 1:
            randomNum = Math.floor(Math.random() * (max + 1));
            break;
        case 2:
            randomNum = Math.floor(Math.random() * (max - min + 1) + min);
            break;
        case 3:
            rerandomNum = turn(Math.random() * (max - min) + min).toFixed(decimalNum);
            break;
        default:
            randomNum = Math.random();
            break;
    }
    return randomNum;
}