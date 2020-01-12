var charset = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

function crack(value) {
    function toRadix(N, radix) {
        var HexN = "",
            Q = Math.floor(Math.abs(N)),
            R = Q % radix,
            strv = charset,
            radix = strv.length;
        while (true) {
            HexN = strv.charAt(R) + HexN;
            Q = (Q - R) / radix;
            if (Q == 0)
                break;
        };
        return ((N < 0) ? "-" + HexN : HexN);
    };
    var start = (new Date()) * 1,
        cracked = false,
        index = 0;
    while (!cracked) {
        if (toRadix(index) == value)
            cracked = true;
        else
            index++;
    };
    alert(((new Date()) * 1) - start);
};
