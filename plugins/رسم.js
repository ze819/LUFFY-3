const _0x304e6d = _0x1575;
(function (_0x3753c8, _0x442ba9) {
    const _0x1e8014 = _0x1575;
    const _0x95cdac = _0x3753c8();
    while (!![]) {
        try {
            const _0x1783cc = parseInt(_0x1e8014(0x1b)) / 0x1 + parseInt(_0x1e8014(0xf)) / 0x2 * (-parseInt(_0x1e8014(0x4)) / 0x3) + -parseInt(_0x1e8014(0x17)) / 0x4 + parseInt(_0x1e8014(0x20)) / 0x5 * (parseInt(_0x1e8014(0x21)) / 0x6) + -parseInt(_0x1e8014(0xc)) / 0x7 + -parseInt(_0x1e8014(0x10)) / 0x8 * (parseInt(_0x1e8014(0x1e)) / 0x9) + parseInt(_0x1e8014(0x2)) / 0xa * (parseInt(_0x1e8014(0xa)) / 0xb);
            if (_0x1783cc === _0x442ba9) {
                break;
            } else {
                _0x95cdac['push'](_0x95cdac['shift']());
            }
        } catch (_0x37c99d) {
            _0x95cdac['push'](_0x95cdac['shift']());
        }
    }
}(_0x430a, 0xa732a));
function _0x430a() {
    const _0x498a92 = ['dall-e', 'url', 'images', 'https://api.lolhuman.xyz/api/dall-e?apikey=', '1713192oTkqtE', '*[❗] حصل خطأ*', 'aimg', 'log', '416668oKxiBw', 'json', '&text=', '837657UQuIox', 'cimg', '5UUThkN', '4848312DnZZPK', 'dalle', 'https://vihangayt.me/tools/lexicaart?q=', 'getFile', '*[❗]*\n*حصل خطأ.*', '2634020JeDfHz', 'a-img', '6QkGVdr', 'luffy*\x0a🎨~*⫷𝑀𝛩𝑁𝐾𝐸𝑌 𝐷 𝐿𝑈𝐹𝐹𝑌⫸*~🎨', 'data', '*_⌛جار التحميل_...⏳*', 'chat', 'sendMessage', '132GPKeaw', 'ia2', '7500395UDTgzQ', '*[❗]*\n*خطء طلبك غير موجود*', 'https://vihangayt.me/tools/imagine?q=', '990970NyAhHM', '104MSrAuF', 'zoro*\x0a*⪼', '*[🎨] اكتب نص ترسمه بالذكاء الاصطناعي لاكن الأمر لا يعمل الا باللغة الإنجليزية فقط*\x0a\x0a*—◉🖌️ مثل*\x0a*⪼ '];
    _0x430a = function () {
        return _0x498a92;
    };
    return _0x430a();
}
import _0x1d897e from 'node-fetch';
const handler = async (_0x76037d, {
    conn: _0x178e90,
    text: _0xf11624,
    usedPrefix: _0x4ac063,
    command: _0x5f0df4
}) => {
    const _0x493472 = _0x1575;
    if (!_0xf11624) throw _0x493472(0x12) + (_0x4ac063 + _0x5f0df4) + _0x493472(0x11) + (_0x4ac063 + _0x5f0df4) + _0x493472(0x5);
    await _0x178e90[_0x493472(0x9)](_0x76037d[_0x493472(0x8)], {
        'text': _0x493472(0x7)
    }, {
        'quoted': _0x76037d
    });
    try {
        const _0x3b83e5 = await _0x1d897e(_0x493472(0xe) + _0xf11624);
        const _0x446f5a = await _0x3b83e5['json']();
        await _0x178e90[_0x493472(0x9)](_0x76037d[_0x493472(0x8)], {
            'image': {
                'url': _0x446f5a[_0x493472(0x6)]
            }
        }, {
            'quoted': _0x76037d
        });
    } catch {
        console[_0x493472(0x1a)]('*[❗]*\n*خطء طلبك غير موجود*');
        try {
            const _0x5ed3a4 = await _0x178e90[_0x493472(0x0)]('https://vihangayt.me/tools/midjourney?q=' + _0xf11624);
            await _0x178e90['sendMessage'](_0x76037d[_0x493472(0x8)], {
                'image': {
                    'url': _0x5ed3a4[_0x493472(0x6)]
                }
            }, {
                'quoted': _0x76037d
            });
        } catch {
            console[_0x493472(0x1a)]('*[❗]*\n*خطء طلبك غير موجود*');
            try {
                const _0x2adfdb = await _0x1d897e(_0x493472(0x23) + _0xf11624);
                const _0x1babf0 = await _0x2adfdb[_0x493472(0x1c)]();
                await _0x178e90[_0x493472(0x9)](_0x76037d[_0x493472(0x8)], {
                    'image': {
                        'url': _0x1babf0[_0x493472(0x6)][0x0][_0x493472(0x15)][0x0][_0x493472(0x14)]
                    }
                }, {
                    'quoted': _0x76037d
                });
            } catch {
                console[_0x493472(0x1a)](_0x493472(0xd));
                try {
                    const _0x2a7618 = await _0x178e90[_0x493472(0x0)](_0x493472(0x16) + lolkeysapi + _0x493472(0x1d) + _0xf11624);
                    await _0x178e90[_0x493472(0x9)](_0x76037d[_0x493472(0x8)], {
                        'image': {
                            'url': _0x2a7618[_0x493472(0x6)]
                        }
                    }, {
                        'quoted': _0x76037d
                    });
                } catch {
                    console[_0x493472(0x1a)](_0x493472(0x1));
                    throw _0x493472(0x18);
                }
            }
        }
    }
};
function _0x1575(_0x58ebc9, _0x430a17) {
    const _0x15758d = _0x430a();
    _0x1575 = function (_0x1ce2cc, _0x49166a) {
        _0x1ce2cc = _0x1ce2cc - 0x0;
        let _0x3ca7b9 = _0x15758d[_0x1ce2cc];
        return _0x3ca7b9;
    };
    return _0x1575(_0x58ebc9, _0x430a17);
}
handler['command'] = [_0x304e6d(0x13), _0x304e6d(0x22), _0x304e6d(0xb), _0x304e6d(0x1f), 'openai3', _0x304e6d(0x3), _0x304e6d(0x19), 'رسم',`ارسم`];
export default handler;