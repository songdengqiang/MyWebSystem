let MesConstant = {
    UnknownData: 0xFF, //不明数据--255
    TimingData: 0x20, //定时帧--32
    UkTimingData: 0xF20, //不明定时帧--3872
    OcSituationData: 0x0C, //12字节态势帧--12
    OeSituationData: 0x0E, //14字节态势帧--14
    UkSituationData: 0xFCE, //14字节不明态势帧--4046
    TrackData: 0x00, //航迹帧--0
    UkTrackData: 0xF00, //不明航迹帧--3840
    Situation83Data: 0x83, //83态势数据帧--131
    UkSituation83Data: 0xF83, //不明83态势数据帧--3971
    Audio27Data: 0x1B, //长度为27的话音数据--27
    Audio30Data: 0x1D, //长度为30的话音数据--29
    Audio31Data: 0x1F, //长度为31的话音数据，G72--31
    AftnData: 0x2F, //AFTN报文数据47--47
    Cat001Data: 0x01, //Cat001报文--1
    Cat002Data: 0x02, //Cat002报文--2
    Cat021Data: 0x15, //Cat021报文--21
    Cat033Data: 0x21, //Cat033报文--33
    Cat034Data: 0x22, //Cat034报文--34
    Cat048Data: 0x30, //Cat048报文--48
    Cat062Data: 0x3E, //Cat062报文--62
    AirLineData: 0x3F, //态势数据
    IpData: 0x11, //IP信息，用来统计IP--17
    LineData: 0xFA1, //线路统计4001--4001
    ActiveUserData: 0x1F5, //当前活跃用户--501
    MesCountData: 0x1F6, //统计用户报文数量--502
    UserIpData: 0x1F7, //统计用户各IP信息--503
    SendHeart: 0XFAA, //转发心跳
}

export default MesConstant