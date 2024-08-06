var Tt = Object.defineProperty;
var Nt = (n, e, t) => (e in n ? Tt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t));
var i = (n, e, t) => (Nt(n, typeof e != 'symbol' ? e + '' : e, t), t),
    _e = (n, e, t) => {
        if (!e.has(n)) throw TypeError('Cannot ' + t);
    };
var r = (n, e, t) => (_e(n, e, 'read from private field'), t ? t.call(n) : e.get(n)),
    c = (n, e, t) => {
        if (e.has(n)) throw TypeError('Cannot add the same private member more than once');
        e instanceof WeakSet ? e.add(n) : e.set(n, t);
    },
    m = (n, e, t, o) => (_e(n, e, 'write to private field'), o ? o.call(n, t) : e.set(n, t), t);
var Te = (n, e, t, o) => ({
    set _(s) {
        m(n, e, s, t);
    },
    get _() {
        return r(n, e, o);
    },
});
import K from 'react';
import { useCallback as Ot, useEffect as Ut, useRef as _t } from 'react';
function P(n) {
    return n === null;
}
function Ne(n) {
    return n === !0 || n === !1;
}
function d(n) {
    return typeof n == 'string';
}
function Y(n) {
    return typeof n == 'number' && Number.isFinite(n);
}
function ue(n) {
    return typeof n == 'function';
}
function g(n) {
    return typeof n == 'object' && n !== null && !Array.isArray(n);
}
function Ie(n) {
    return Array.isArray(n);
}
function v(n, e) {
    throw e || new Error(n ? `Unexpected value: ${n}` : 'Application entered invalid state');
}
function l(n, ...e) {
    if (n) return;
    let t = Error('Assertion Error' + (e.length > 0 ? ': ' + e.join(' ') : ''));
    if (t.stack)
        try {
            let o = t.stack.split(`
    `);
            o[1]?.includes('assert')
                ? (o.splice(1, 1),
                  (t.stack = o.join(`
    `)))
                : o[0]?.includes('assert') &&
                  (o.splice(0, 1),
                  (t.stack = o.join(`
    `)));
        } catch {}
    throw t;
}
var ze = '__class',
    Ce = 'LinearGradient',
    Se = 'RadialGradient',
    ve = 'ConicGradient';
function ce(n) {
    if (!g(n)) return !1;
    switch (n[ze]) {
        case Ce:
        case Se:
        case ve:
            return !0;
        default:
            return !1;
    }
}
function q(n) {
    return n instanceof G || n instanceof E || n instanceof M;
}
function He(n) {
    if (n instanceof G) return { __class: Ce, angle: n.angle, stops: n.stops };
    if (n instanceof E) return { __class: Se, width: n.width, height: n.height, x: n.x, y: n.y, stops: n.stops };
    if (n instanceof M) return { __class: ve, angle: n.angle, x: n.x, y: n.y, stops: n.stops };
    v(n);
}
function me(n) {
    switch (n[ze]) {
        case Ce:
            return new G(n);
        case Se:
            return new E(n);
        case ve:
            return new M(n);
        default:
            v(n);
    }
}
var G = class n {
        constructor(e) {
            i(this, 'angle');
            i(this, 'stops');
            (this.angle = e.angle), (this.stops = e.stops), Object.freeze(this);
        }
        cloneWithAttributes(e) {
            return new n({ angle: e.angle ?? this.angle, stops: e.stops ?? this.stops });
        }
        toCSS() {
            let e = this.stops.map((t) => `${t.color} ${t.position * 100}%`).join(', ');
            return `linear-gradient(${this.angle}deg, ${e})`;
        }
    },
    E = class n {
        constructor(e) {
            i(this, 'width');
            i(this, 'height');
            i(this, 'x');
            i(this, 'y');
            i(this, 'stops');
            (this.width = e.width), (this.height = e.height), (this.x = e.x), (this.y = e.y), (this.stops = e.stops), Object.freeze(this);
        }
        cloneWithAttributes(e) {
            return new n({
                width: e.width ?? this.width,
                height: e.height ?? this.height,
                x: e.x ?? this.x,
                y: e.y ?? this.y,
                stops: e.stops ?? this.stops,
            });
        }
        toCSS() {
            let e = this.stops
                .map((t, o) => {
                    let s = this.stops[o + 1],
                        a = t.position === 1 && s?.position === 1 ? t.position - 1e-4 : t.position;
                    return `${t.color} ${a * 100}%`;
                })
                .join(', ');
            return `radial-gradient(${this.width} ${this.height} at ${this.x} ${this.y}, ${e})`;
        }
    },
    M = class n {
        constructor(e) {
            i(this, 'angle');
            i(this, 'x');
            i(this, 'y');
            i(this, 'stops');
            (this.angle = e.angle), (this.x = e.x), (this.y = e.y), (this.stops = e.stops), Object.freeze(this);
        }
        cloneWithAttributes(e) {
            return new n({ angle: e.angle ?? this.angle, x: e.x ?? this.x, y: e.y ?? this.y, stops: e.stops ?? this.stops });
        }
        toCSS() {
            let e = this.stops.map((t) => `${t.color} ${t.position * 360}deg`).join(', ');
            return `conic-gradient(from ${this.angle}deg at ${this.x} ${this.y}, ${e})`;
        }
    };
var It = 'invoke';
function x(n) {
    return It in n;
}
var Ct = 'ImageAsset',
    St = '__class';
function ge(n) {
    return g(n) ? n[St] === Ct : !1;
}
var A,
    B,
    Ae = class Ae {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'url');
            i(this, 'thumbnailUrl');
            i(this, 'altText');
            c(this, A, void 0);
            c(this, B, void 0);
            l(x(t)), (this.url = e.url), m(this, B, t), (this.id = e.id), (this.thumbnailUrl = e.thumbnailUrl), (this.altText = e.altText);
        }
        cloneWithAttributes({ altText: e }) {
            return new Ae(
                { __class: 'ImageAsset', id: this.id, url: this.url, thumbnailUrl: this.thumbnailUrl, altText: e !== void 0 ? e : this.altText },
                r(this, B)
            );
        }
        async measure() {
            return Dt(this.url);
        }
        async getData() {
            if (r(this, A) && r(this, A).bytes.length > 0) return r(this, A);
            let e = await r(this, B).invoke('getImageData', { id: this.id });
            if (!e) throw new Error('Failed to load image data');
            return m(this, A, e), e;
        }
        async loadBitmap() {
            let { mimeType: e, bytes: t } = await this.getData(),
                o = new Blob([t], { type: e });
            return createImageBitmap(o);
        }
        async loadImage() {
            let e = await this.getData(),
                t = URL.createObjectURL(new Blob([e.bytes]));
            return new Promise((o, s) => {
                let a = new Image();
                (a.onload = () => o(a)), (a.onerror = () => s()), (a.src = t);
            });
        }
    };
(A = new WeakMap()), (B = new WeakMap());
var y = Ae;
function vt(n) {
    return n instanceof y;
}
function O(n) {
    return n.type === 'bytes' ? [n.bytes.buffer] : [];
}
function kt(n) {
    if (!g(n)) return !1;
    let e = 'bytes',
        t = 'mimeType';
    return !(!(e in n) || !(t in n) || !(n[e] instanceof Uint8Array) || !d(n[t]));
}
async function Z(n) {
    return n instanceof File
        ? Ke(n)
        : n.image instanceof File
        ? Ke(n.image)
        : kt(n.image)
        ? { name: n.name, altText: n.altText, type: 'bytes', mimeType: n.image.mimeType, bytes: n.image.bytes }
        : { name: n.name, altText: n.altText, type: 'url', url: n.image };
}
function ke(n) {
    return Promise.all(n.map(Z));
}
function At(n) {
    if (!n.startsWith('image/')) throw new Error(`Unsupported mime type: ${n}`);
}
async function Ke(n) {
    return new Promise((e, t) => {
        let o = new FileReader();
        (o.onload = (s) => {
            let a = n.type;
            At(n.type);
            let u = s.target?.result;
            if (!u || !(u instanceof ArrayBuffer)) {
                t(new Error('Failed to read file, arrayBuffer is null'));
                return;
            }
            let C = new Uint8Array(u);
            e({ bytes: C, mimeType: a, type: 'bytes' });
        }),
            (o.onerror = (s) => {
                t(s);
            }),
            o.readAsArrayBuffer(n);
    });
}
async function Dt(n) {
    let e = n instanceof File,
        t = e ? URL.createObjectURL(n) : n,
        o = new Image();
    return (
        (o.crossOrigin = 'anonymous'),
        (o.src = t),
        await o.decode().finally(() => {
            e && URL.revokeObjectURL(t);
        }),
        { height: o.height, width: o.width }
    );
}
function D(n) {
    if (Ft(n)) return wt(n);
    if (Ie(n)) return n.map(D);
    if (g(n)) {
        let e = {};
        for (let t in n) e[t] = D(n[t]);
        return e;
    }
    return n;
}
function je(n, e) {
    let t = {};
    for (let o in n) t[o] = De(n[o], e);
    return t;
}
function De(n, e) {
    if (Wt(n))
        switch (n.__class) {
            case 'ImageAsset':
                return new y(n, e);
            case 'LinearGradient':
            case 'RadialGradient':
            case 'ConicGradient':
                return me(n);
            default:
                v(n);
        }
    if (g(n)) {
        let t = {};
        for (let o in n) t[o] = De(n[o], e);
        return t;
    }
    return Ie(n) ? n.map((t) => De(t, e)) : n;
}
function Wt(n) {
    return !!(ge(n) || ce(n));
}
function Ft(n) {
    return !!(n instanceof y || q(n));
}
function wt(n) {
    if (n instanceof y) return { __class: 'ImageAsset', id: n.id, thumbnailUrl: n.thumbnailUrl, url: n.url, altText: n.altText };
    if (q(n)) return He(n);
    v(n);
}
var b,
    pe = class {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'name');
            c(this, b, void 0);
            l(d(e.id), 'Node must have an id'),
                l(d(e.name), 'Node must have a name'),
                (this.id = e.id),
                (this.name = e.name),
                l(x(t)),
                m(this, b, t),
                Object.freeze(this);
        }
        async getItemIds() {
            return r(this, b).invoke('getCollectionItemIds', this.id);
        }
        async setItemOrder(e) {
            return r(this, b).invoke('setCollectionItemOrder', this.id, e);
        }
        async getFields() {
            return r(this, b).invoke('getCollectionFields', this.id);
        }
        async setFields(e) {
            return r(this, b).invoke('setCollectionFields', this.id, e);
        }
        async addItems(e) {
            return r(this, b).invoke('addCollectionItems', this.id, e);
        }
        async removeItems(e) {
            return r(this, b).invoke('removeCollectionItems', this.id, e);
        }
        async setPluginData(e, t) {
            return r(this, b).invoke('setPluginDataForNode', this.id, e, t);
        }
        async getPluginData(e) {
            return r(this, b).invoke('getPluginDataForNode', this.id, e);
        }
        async getPluginDataKeys() {
            return r(this, b).invoke('getPluginDataKeysForNode', this.id);
        }
    };
b = new WeakMap();
var Rt = (() => {
        let n = null;
        return {
            disableUntilMouseUp: () => {
                if (n) return;
                (n = document.createElement('style')),
                    (n.textContent = '* { pointer-events: none !important; user-select: none !important; -webkit-user-select: none !important; }'),
                    document.head.appendChild(n);
                let e = () => {
                        n && (document.head.removeChild(n), (n = null), s());
                    },
                    t = (a) => {
                        (a.buttons > 0 && a.buttons & 1) || e();
                    },
                    o = () => {
                        e();
                    };
                window.addEventListener('pointerup', t, !0), window.addEventListener('pointermove', t, !0), window.addEventListener('blur', o);
                function s() {
                    window.removeEventListener('pointerup', t, !0),
                        window.removeEventListener('pointermove', t, !0),
                        window.removeEventListener('blur', o);
                }
            },
        };
    })(),
    $e = 5,
    Lt = (() => {
        let n = 1;
        return { next: () => `drag-${n++}` };
    })();
function Vt() {}
function Xe(n, e, t) {
    if (n.mode !== 'default') return Vt;
    l(x(n));
    let o = Lt.next(),
        s = document.body.style.cursor,
        a = { type: 'idle' },
        u = document.body,
        C = (h) => {
            a.type !== 'idle' && (a.type === 'dragging' && n.invoke('onDragEnd', { ...h, dragSessionId: o }), (a = { type: 'idle' }), xt());
        },
        se = (h) => {
            if (a.type === 'idle') return;
            if (!(h.buttons > 0 && !!(h.buttons & 1))) {
                C({ cancelled: !1 });
                return;
            }
            let { clientX: ae, clientY: $ } = h;
            if (a.type === 'pointerDown') {
                let X = ae - a.dragStart.mouse.x,
                    Ue = $ - a.dragStart.mouse.y;
                if (Math.abs(X) < $e && Math.abs(Ue) < $e) return;
                (a = { type: 'dragging', dragStart: a.dragStart }),
                    n.invoke('onDragStart', a.dragStart),
                    document.getSelection()?.empty(),
                    Rt.disableUntilMouseUp();
            }
            u.setPointerCapture(h.pointerId);
            let le = { x: ae, y: $ };
            n.invoke('onDrag', { dragSessionId: o, mouse: le }).then((X) => {
                a.type === 'dragging' && (document.body.style.cursor = X ?? '');
            });
        },
        Ee = (h) => {
            h.key === 'Escape' && C({ cancelled: !0 });
        },
        Me = () => {
            C({ cancelled: !0 });
        },
        Be = (h) => {
            C({ cancelled: !0 });
            let j = e.getBoundingClientRect(),
                ae = { x: j.x, y: j.y, width: j.width, height: j.height },
                $,
                le = e.querySelectorAll('svg');
            if (le.length === 1) {
                let de = le.item(0).getBoundingClientRect();
                $ = { x: de.x, y: de.y, width: de.width, height: de.height };
            }
            let X = { x: h.clientX, y: h.clientY };
            (a = { type: 'pointerDown', dragStart: { dragSessionId: o, elementRect: ae, svgRect: $, mouse: X } }),
                n.invoke('setDragData', o, t()),
                u.addEventListener('pointermove', se, !0),
                u.addEventListener('pointerup', se, !0),
                window.addEventListener('keydown', Ee, !0),
                window.addEventListener('blur', Me);
        },
        Oe = () => {
            let h = t();
            h.type === 'detachedComponentLayers' && n.invoke('preloadDetachedComponentLayers', h.url),
                h.type === 'image' && n.invoke('preloadImageUrlForInsertion', h.image),
                h.previewImage && n.invoke('preloadDragPreviewImage', h.previewImage);
        };
    e.addEventListener('pointerdown', Be), e.addEventListener('mouseenter', Oe);
    function xt() {
        (document.body.style.cursor = s),
            u.removeEventListener('pointermove', se, !0),
            u.removeEventListener('pointerup', se, !0),
            window.removeEventListener('keydown', Ee, !0),
            window.removeEventListener('blur', Me);
    }
    return () => {
        e.removeEventListener('pointerdown', Be), e.removeEventListener('mouseenter', Oe), C({ cancelled: !0 });
    };
}
var Q = class extends Error {};
var k = class {
        constructor(e) {
            i(this, 'selector');
            i(this, 'family');
            i(this, 'weight');
            i(this, 'style');
            (this.selector = e.selector), (this.family = e.family), (this.weight = e.weight), (this.style = e.style);
        }
    },
    Ye = new Map();
function We(n) {
    let e = Ye.get(n.selector);
    if (e) return e;
    let t = new k(n);
    return Ye.set(n.selector, t), t;
}
var Gt = { default: !0, image: !0, editImage: !0, configureCollection: !0, syncCollection: !0 };
function qe(n) {
    return d(n) && n in Gt;
}
var Et = { methodResponse: !0, pluginReadyResponse: !0, subscriptionMessage: !0 };
function Mt(n) {
    return d(n) && n in Et;
}
function Ze(n) {
    return g(n) && Mt(n['type']);
}
var re,
    f,
    T,
    S = class {
        constructor(e, t) {
            i(this, 'id');
            c(this, re, void 0);
            c(this, f, void 0);
            c(this, T, void 0);
            l(d(e.id), 'Node must have an id'), (this.id = e.id), m(this, f, t), m(this, re, e.originalId ?? null), l(x(t)), m(this, T, t);
        }
        get isReplica() {
            return r(this, re) !== null;
        }
        remove() {
            return r(this, f).removeNode(this.id);
        }
        select() {
            return r(this, f).setSelection([this.id]);
        }
        clone() {
            return r(this, f).cloneNode(this.id);
        }
        setAttributes(e) {
            return r(this, f).setAttributes(this.id, e);
        }
        getRect() {
            return r(this, f).getRect(this.id);
        }
        zoomIntoView(e) {
            return r(this, f).zoomIntoView([this.id], e);
        }
        getParent() {
            return r(this, f).getParent(this.id);
        }
        getChildren() {
            return W(this) ? Promise.resolve([]) : r(this, f).getChildren(this.id);
        }
        async getNodesWithType(e) {
            return W(this) ? Promise.resolve([]) : (await r(this, T).invoke('getNodesWithType', this.id, e)).map((o) => p(o, r(this, f)));
        }
        async getNodesWithAttribute(e) {
            return W(this) ? Promise.resolve([]) : (await r(this, T).invoke('getNodesWithAttribute', this.id, e)).map((o) => p(o, r(this, f)));
        }
        async getNodesWithAttributeSet(e) {
            return W(this) ? Promise.resolve([]) : (await r(this, T).invoke('getNodesWithAttributeSet', this.id, e)).map((o) => p(o, r(this, f)));
        }
        async *walk() {
            if ((yield this, !W(this))) for (let e of await this.getChildren()) yield* e.walk();
        }
        async getPluginData(e) {
            return r(this, T).invoke('getPluginDataForNode', this.id, e);
        }
        async setPluginData(e, t) {
            return r(this, T).invoke('setPluginDataForNode', this.id, e, t);
        }
        async getPluginDataKeys() {
            return r(this, T).invoke('getPluginDataKeysForNode', this.id);
        }
    };
(re = new WeakMap()), (f = new WeakMap()), (T = new WeakMap());
var F = class extends S {
        constructor(t, o) {
            super(t, o);
            i(this, '__class', 'FrameNode');
            i(this, 'name');
            i(this, 'visible');
            i(this, 'locked');
            i(this, 'backgroundColor');
            i(this, 'backgroundImage');
            i(this, 'backgroundGradient');
            i(this, 'rotation');
            i(this, 'opacity');
            i(this, 'borderRadius');
            i(this, 'position');
            i(this, 'top');
            i(this, 'right');
            i(this, 'bottom');
            i(this, 'left');
            i(this, 'centerX');
            i(this, 'centerY');
            i(this, 'width');
            i(this, 'height');
            i(this, 'maxWidth');
            i(this, 'minWidth');
            i(this, 'maxHeight');
            i(this, 'minHeight');
            i(this, 'aspectRatio');
            l(t.__class === 'FrameNode', 'FrameNode must have a __class property'),
                (this.name = t.name ?? null),
                (this.visible = t.visible ?? !0),
                (this.locked = t.locked ?? !1),
                (this.backgroundColor = t.backgroundColor ?? null),
                (this.backgroundImage = t.backgroundImage ? new y(t.backgroundImage, o) : null),
                (this.rotation = t.rotation ?? 0),
                (this.opacity = t.opacity ?? 1),
                (this.borderRadius = t.borderRadius ?? null),
                (this.backgroundGradient = ce(t.backgroundGradient) ? me(t.backgroundGradient) : null),
                l(t.position, 'Must have a position'),
                (this.position = t.position),
                (this.left = t.left ?? null),
                (this.right = t.right ?? null),
                (this.top = t.top ?? null),
                (this.bottom = t.bottom ?? null),
                (this.centerX = t.centerX ?? null),
                (this.centerY = t.centerY ?? null),
                (this.width = t.width ?? null),
                (this.height = t.height ?? null),
                (this.maxWidth = t.maxWidth ?? null),
                (this.minWidth = t.minWidth ?? null),
                (this.maxHeight = t.maxHeight ?? null),
                (this.minHeight = t.minHeight ?? null),
                (this.aspectRatio = t.aspectRatio ?? null),
                Object.freeze(this);
        }
        clone() {
            return super.clone();
        }
        setAttributes(t) {
            return super.setAttributes(t);
        }
    },
    U,
    J = class extends S {
        constructor(t, o) {
            super(t, o);
            i(this, '__class', 'TextNode');
            i(this, 'name');
            i(this, 'visible');
            i(this, 'locked');
            i(this, 'rotation');
            i(this, 'opacity');
            i(this, 'position');
            i(this, 'top');
            i(this, 'right');
            i(this, 'bottom');
            i(this, 'left');
            i(this, 'centerX');
            i(this, 'centerY');
            i(this, 'width');
            i(this, 'height');
            i(this, 'maxWidth');
            i(this, 'minWidth');
            i(this, 'maxHeight');
            i(this, 'minHeight');
            c(this, U, void 0);
            l(x(o)),
                m(this, U, o),
                (this.name = t.name ?? null),
                (this.visible = t.visible ?? !0),
                (this.locked = t.locked ?? !1),
                (this.rotation = t.rotation ?? 0),
                (this.opacity = t.opacity ?? 1),
                l(t.position, 'Must have a position'),
                (this.position = t.position),
                (this.left = t.left ?? null),
                (this.right = t.right ?? null),
                (this.top = t.top ?? null),
                (this.bottom = t.bottom ?? null),
                (this.centerX = t.centerX ?? null),
                (this.centerY = t.centerY ?? null),
                (this.width = t.width ?? null),
                (this.height = t.height ?? null),
                (this.maxWidth = t.maxWidth ?? null),
                (this.minWidth = t.minWidth ?? null),
                (this.maxHeight = t.maxHeight ?? null),
                (this.minHeight = t.minHeight ?? null),
                Object.freeze(this);
        }
        clone() {
            return super.clone();
        }
        setAttributes(t) {
            return super.setAttributes(t);
        }
        async setText(t) {
            await r(this, U).invoke('setTextForNode', this.id, t);
        }
        async getText() {
            return r(this, U).invoke('getTextForNode', this.id);
        }
    };
U = new WeakMap();
var ee = class extends S {
        constructor(t, o) {
            super(t, o);
            i(this, '__class', 'SVGNode');
            i(this, 'name');
            i(this, 'visible');
            i(this, 'locked');
            i(this, 'svg');
            i(this, 'rotation');
            i(this, 'opacity');
            i(this, 'position');
            i(this, 'top');
            i(this, 'right');
            i(this, 'bottom');
            i(this, 'left');
            i(this, 'centerX');
            i(this, 'centerY');
            i(this, 'width');
            i(this, 'height');
            l(t.svg, 'SVG node must have a non-empty SVG string'),
                (this.name = t.name ?? null),
                (this.visible = t.visible ?? !0),
                (this.locked = t.locked ?? !1),
                (this.svg = t.svg),
                (this.rotation = t.rotation ?? 0),
                (this.opacity = t.opacity ?? 1),
                l(t.position, 'Must have a position'),
                (this.position = t.position ?? null),
                (this.left = t.left ?? null),
                (this.right = t.right ?? null),
                (this.top = t.top ?? null),
                (this.bottom = t.bottom ?? null),
                (this.centerX = t.centerX ?? null),
                (this.centerY = t.centerY ?? null),
                (this.width = t.width ?? null),
                (this.height = t.height ?? null),
                Object.freeze(this);
        }
        clone() {
            return super.clone();
        }
        setAttributes(t) {
            return super.setAttributes(t);
        }
    },
    te = class extends S {
        constructor(t, o) {
            super(t, o);
            i(this, '__class', 'ComponentInstanceNode');
            i(this, 'name');
            i(this, 'visible');
            i(this, 'locked');
            i(this, 'componentIdentifier');
            i(this, 'controls');
            i(this, 'rotation');
            i(this, 'opacity');
            i(this, 'position');
            i(this, 'top');
            i(this, 'right');
            i(this, 'bottom');
            i(this, 'left');
            i(this, 'centerX');
            i(this, 'centerY');
            i(this, 'width');
            i(this, 'height');
            i(this, 'maxWidth');
            i(this, 'minWidth');
            i(this, 'maxHeight');
            i(this, 'minHeight');
            i(this, 'aspectRatio');
            l(t.componentIdentifier, 'ComponentInstance node must have a component identifier'),
                (this.name = t.name ?? null),
                (this.visible = t.visible ?? !0),
                (this.locked = t.locked ?? !1),
                (this.componentIdentifier = t.componentIdentifier),
                (this.controls = je(t.controls ?? {}, o)),
                (this.rotation = t.rotation ?? 0),
                (this.opacity = t.opacity ?? 1),
                l(t.position, 'Must have a position'),
                (this.position = t.position),
                (this.left = t.left ?? null),
                (this.right = t.right ?? null),
                (this.top = t.top ?? null),
                (this.bottom = t.bottom ?? null),
                (this.centerX = t.centerX ?? null),
                (this.centerY = t.centerY ?? null),
                (this.width = t.width ?? null),
                (this.height = t.height ?? null),
                (this.maxWidth = t.maxWidth ?? null),
                (this.minWidth = t.minWidth ?? null),
                (this.maxHeight = t.maxHeight ?? null),
                (this.minHeight = t.minHeight ?? null),
                (this.aspectRatio = t.aspectRatio ?? null),
                Object.freeze(this);
        }
        clone() {
            return super.clone();
        }
        setAttributes(t) {
            return super.setAttributes(t);
        }
    },
    ne = class extends S {
        constructor(t, o) {
            super(t, o);
            i(this, '_class', 'WebPageNode');
            Object.freeze(this);
        }
        clone() {
            return super.clone();
        }
        setAttributes(t) {
            return super.setAttributes(t);
        }
    },
    ie = class extends S {
        constructor(t, o) {
            super(t, o);
            i(this, '__class', 'ComponentNode');
            i(this, 'name');
            (this.name = t.name ?? null), Object.freeze(this);
        }
        clone() {
            return super.clone();
        }
        setAttributes(t) {
            return super.setAttributes(t);
        }
    },
    oe = class extends S {
        constructor(t, o) {
            super(t, o);
            i(this, '__class', 'UnknownNode');
            Object.freeze(this);
        }
        clone() {
            throw Error('Can not clone unknown node');
        }
        setAttributes(t) {
            throw Error('Can not set attributes on unknown node');
        }
    };
function p(n, e) {
    switch (n.__class) {
        case 'WebPageNode':
            return new ne(n, e);
        case 'ComponentNode':
            return new ie(n, e);
        case 'ComponentInstanceNode':
            return new te(n, e);
        case 'FrameNode':
            return new F(n, e);
        case 'SVGNode':
            return new ee(n, e);
        case 'TextNode':
            return new J(n, e);
        case 'UnknownNode':
            return new oe(n, e);
        default:
            return new oe(n, e);
    }
}
function Fe(n) {
    return D(n);
}
function he(n) {
    return n instanceof F;
}
function Qe(n) {
    return n instanceof J;
}
function Je(n) {
    return n instanceof ee;
}
function ye(n) {
    return n instanceof te;
}
function et(n) {
    return n instanceof ne;
}
function tt(n) {
    return n instanceof ie;
}
function W(n) {
    return n instanceof oe;
}
function fe(n) {
    return !!(he(n) || Qe(n) || ye(n) || Je(n) || W(n));
}
function we(n) {
    return !!(et(n) || tt(n) || W(n));
}
var N,
    Re = class Re {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'name');
            i(this, 'light');
            i(this, 'dark');
            c(this, N, void 0);
            l(d(e.id), 'Style must have an id'),
                (this.id = e.id),
                (this.name = e.name),
                (this.light = e.light),
                (this.dark = e.dark),
                l(x(t)),
                m(this, N, t);
        }
        async setAttributes(e) {
            let t = await r(this, N).invoke('setColorStyleAttributes', this.id, e);
            return t ? new Re(t, r(this, N)) : null;
        }
        async getPluginData(e) {
            return r(this, N).invoke('getPluginDataForNode', this.id, e);
        }
        async setPluginData(e, t) {
            return r(this, N).invoke('setPluginDataForNode', this.id, e, t);
        }
        async getPluginDataKeys() {
            return r(this, N).invoke('getPluginDataKeysForNode', this.id);
        }
        async remove() {
            return r(this, N).invoke('removeColorStyle', this.id);
        }
    };
N = new WeakMap();
var w = Re,
    I,
    Le = class Le {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'name');
            i(this, 'tag');
            i(this, 'font');
            i(this, 'boldFont');
            i(this, 'italicFont');
            i(this, 'boldItalicFont');
            i(this, 'color');
            i(this, 'transform');
            i(this, 'alignment');
            i(this, 'decoration');
            i(this, 'balance');
            i(this, 'breakpoints');
            i(this, 'minWidth');
            i(this, 'fontSize');
            i(this, 'letterSpacing');
            i(this, 'lineHeight');
            i(this, 'paragraphSpacing');
            c(this, I, void 0);
            l(d(e.id), 'Style must have an id'),
                (this.id = e.id),
                (this.name = e.name),
                (this.tag = e.tag),
                (this.font = new k(e.font)),
                (this.boldFont = e.boldFont ? new k(e.boldFont) : null),
                (this.italicFont = e.italicFont ? new k(e.italicFont) : null),
                (this.boldItalicFont = e.boldItalicFont ? new k(e.boldItalicFont) : null),
                (this.color = e.color),
                (this.transform = e.transform),
                (this.alignment = e.alignment),
                (this.decoration = e.decoration),
                (this.balance = e.balance),
                (this.breakpoints = e.breakpoints),
                (this.minWidth = e.minWidth),
                (this.fontSize = e.fontSize),
                (this.letterSpacing = e.letterSpacing),
                (this.lineHeight = e.lineHeight),
                (this.paragraphSpacing = e.paragraphSpacing),
                l(x(t)),
                m(this, I, t);
        }
        async setAttributes(e) {
            let t = await r(this, I).invoke('setTextStyleAttributes', this.id, e);
            return t ? new Le(t, r(this, I)) : null;
        }
        async getPluginData(e) {
            return r(this, I).invoke('getPluginDataForNode', this.id, e);
        }
        async setPluginData(e, t) {
            return r(this, I).invoke('setPluginDataForNode', this.id, e, t);
        }
        async getPluginDataKeys() {
            return r(this, I).invoke('getPluginDataKeysForNode', this.id);
        }
        async remove() {
            return r(this, I).invoke('removeTextStyle', this.id);
        }
    };
I = new WeakMap();
var R = Le;
var _ = null;
function nt(n) {
    if (!_) {
        let t = document.createElement('style');
        document.head.appendChild(t), (_ = t.sheet);
    }
    if (!_) {
        n();
        return;
    }
    let e = _.insertRule('* { transition: none !important; animation: none !important; }');
    n(),
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                _ && _.deleteRule(e);
            });
        });
}
var Bt = 1,
    Pe,
    xe,
    z,
    L,
    H,
    V,
    be = class {
        constructor({ isTestEnv: e } = {}) {
            c(this, Pe, 0);
            c(this, xe, 0);
            c(this, z, []);
            c(this, L, void 0);
            c(this, H, new Map());
            c(this, V, void 0);
            i(this, 'subscriptions', new Map());
            i(this, 'onMessage', (e) => {
                let t = e.data;
                if (Ze(t))
                    switch (t.type) {
                        case 'pluginReadyResponse': {
                            if (!e.source) throw new Error("No 'source' on incoming message: " + t.type);
                            l(r(this, V) === t.mode, 'Mode must match'),
                                this.applyPluginTheme(t.theme),
                                m(this, L, (s, a) => window.parent.postMessage(s, e.origin, a));
                            for (let s of r(this, z)) r(this, L).call(this, ...s);
                            m(this, z, []);
                            break;
                        }
                        case 'methodResponse': {
                            let o = r(this, H).get(t.id);
                            if (!o) throw new Error(`No handler for response with id ${t.id}`);
                            r(this, H).delete(t.id), t.error ? o.reject(new Q(t.error)) : o.resolve(t.result);
                            break;
                        }
                        case 'subscriptionMessage': {
                            let { topic: o, payload: s } = t,
                                a = this.subscriptions.get(o);
                            if (!a) throw new Error('Received a subscription message but no handler present');
                            for (let u of a) u(s);
                            break;
                        }
                        default:
                            v(t);
                    }
            });
            i(this, 'applyPluginTheme', (e) => {
                nt(() => {
                    document.body.setAttribute('data-framer-theme', e.mode);
                    for (let t in e.tokens) document.body.style.setProperty(t, e.tokens[t]);
                });
            });
            if (e) {
                m(this, V, 'default');
                return;
            }
            let o = new URL(window.location.href).searchParams.get('mode');
            try {
                l(qe(o), `Invalid mode: ${o}`), m(this, V, o), window.addEventListener('message', this.onMessage);
            } catch(e) {
                o = 'default';
            }
            let s = { type: 'pluginReadySignal', breakingChangesVersion: Bt };
            window.parent.postMessage(s, '*'),
                this.subscribe('theme', this.applyPluginTheme),
                window.addEventListener('pointerdown', () => {
                    this.invoke('onPointerDown');
                });
        }
        get mode() {
            return r(this, V);
        }
        invoke(e, ...t) {
            return this.invokeTransferable(e, void 0, ...t);
        }
        invokeTransferable(e, t, ...o) {
            return new Promise((s, a) => {
                let u = { args: o, methodName: e, id: Te(this, Pe)._++, type: 'methodInvocation' },
                    C = s;
                r(this, H).set(u.id, { resolve: C, reject: a }), this.queueMessage(u, t);
            });
        }
        subscribe(e, t) {
            this.queueMessage({ type: 'subscribe', topic: e });
            let o = this.subscriptions.get(e) ?? new Set();
            return (
                o.add(t),
                this.subscriptions.set(e, o),
                () => {
                    let s = this.subscriptions.get(e) ?? new Set();
                    s.delete(t), s.size === 0 && this.queueMessage({ type: 'unsubscribe', topic: e }), this.subscriptions.set(e, s);
                }
            );
        }
        queueMessage(e, t) {
            if (!r(this, L)) {
                r(this, z).push([e, t]);
                return;
            }
            r(this, L).call(this, e, t);
        }
        async showUI(e) {
            return this.invoke('showUI', e);
        }
        async hideUI() {
            return this.invoke('hideUI');
        }
        async closePlugin(e, t) {
            return this.invoke('closePlugin', e, t);
        }
        async getCurrentUser() {
            return this.invoke('getCurrentUser');
        }
        async getSelection() {
            return (await this.invoke('getSelection')).map((t) => {
                let o = p(t, this);
                return l(fe(o)), o;
            });
        }
        async setSelection(e) {
            let t = d(e) ? [e] : Array.from(e);
            return this.invoke('setSelection', t);
        }
        subscribeToSelection(e) {
            return this.subscribe('selection', (t) => {
                let o = t.map((s) => {
                    let a = p(s, this);
                    return l(fe(a)), a;
                });
                e(o);
            });
        }
        async getCanvasRoot() {
            let e = await this.invoke('getCanvasRoot'),
                t = p(e, this);
            return l(we(t)), t;
        }
        subscribeToCanvasRoot(e) {
            return this.subscribe('canvasRoot', (t) => {
                let o = p(t, this);
                l(we(o)), e(o);
            });
        }
        async getPublishInfo() {
            return this.invoke('getPublishInfo');
        }
        subscribeToPublishInfo(e) {
            return this.subscribe('publishInfo', e);
        }
        async createFrameNode(e, t) {
            let o = Fe(e),
                s = await this.invoke('createNode', 'FrameNode', t ?? null, o);
            if (!s) return null;
            let a = p(s, this);
            return l(a instanceof F), a;
        }
        async removeNode(e) {
            return this.invoke('removeNode', e);
        }
        async cloneNode(e) {
            let t = await this.invoke('cloneNode', e);
            return t ? p(t, this) : null;
        }
        async getNode(e) {
            let t = await this.invoke('getNode', e);
            return t ? p(t, this) : null;
        }
        async getParent(e) {
            let t = await this.invoke('getParent', e);
            return t ? p(t, this) : null;
        }
        async getChildren(e) {
            return (await this.invoke('getChildren', e)).map((o) => {
                let s = p(o, this);
                return l(fe(s)), s;
            });
        }
        async getRect(e) {
            return this.invoke('getRect', e);
        }
        async zoomIntoView(e, t) {
            let o = d(e) ? [e] : Array.from(e);
            return this.invoke('zoomIntoView', o, t);
        }
        async setAttributes(e, t) {
            let o = Fe(t),
                s = await this.invoke('setAttributes', e, o);
            return s ? p(s, this) : null;
        }
        async setParent(e, t, o) {
            return this.invoke('setParent', e, t, o);
        }
        async getNodesWithType(e) {
            return (await this.invoke('getNodesWithType', null, e)).map((o) => p(o, this));
        }
        async getNodesWithAttribute(e) {
            return (await this.invoke('getNodesWithAttribute', null, e)).map((o) => p(o, this));
        }
        async getNodesWithAttributeSet(e) {
            return (await this.invoke('getNodesWithAttributeSet', null, e)).map((o) => p(o, this));
        }
        async getImage() {
            let e = await this.invoke('getImage');
            return e ? new y(e, this) : null;
        }
        subscribeToImage(e) {
            return this.subscribe('image', (t) => {
                if (!t) {
                    e(null);
                    return;
                }
                e(new y(t, this));
            });
        }
        async addImage(e) {
            let t = await Z(e),
                o = O(t);
            return this.invokeTransferable('addImage', o, t);
        }
        async setImage(e) {
            let t = await Z(e),
                o = O(t);
            return this.invokeTransferable('setImage', o, t);
        }
        async uploadImage(e) {
            let t = await Z(e),
                o = O(t),
                s = await this.invokeTransferable('uploadImage', o, t);
            return new y(s, this);
        }
        async addImages(e) {
            let t = await ke(e),
                o = t.flatMap(O);
            await this.invokeTransferable('addImages', o, t);
        }
        async uploadImages(e) {
            let t = await ke(e),
                o = t.flatMap(O),
                s = await this.invokeTransferable('uploadImages', o, t),
                a = [];
            for (let u of s) a.push(new y(u, this));
            return a;
        }
        async addSVG(e) {
            return this.invoke('addSVG', e);
        }
        async addComponentInstance({ url: e, attributes: t }) {
            let o = D(t),
                s = await this.invoke('addComponentInstance', { url: e, attributes: g(o) ? o : void 0 }),
                a = p(s, this);
            return l(ye(a)), a;
        }
        async addDetachedComponentLayers({ url: e, layout: t, attributes: o }) {
            let s = D(o),
                a = await this.invoke('addDetachedComponentLayers', { url: e, layout: t, attributes: g(s) ? s : void 0 }),
                u = p(a, this);
            return l(he(u)), u;
        }
        async preloadDetachedComponentLayers(e) {
            await this.invoke('preloadDetachedComponentLayers', e);
        }
        async preloadImageUrlForInsertion(e) {
            await this.invoke('preloadImageUrlForInsertion', e);
        }
        async preloadDragPreviewImage(e) {
            await this.invoke('preloadDragPreviewImage', e);
        }
        async getText() {
            return this.invoke('getText');
        }
        async setText(e) {
            return this.invoke('setText', e);
        }
        async addText(e, t) {
            return this.invoke('addText', e, t);
        }
        async setCustomCode(e) {
            return this.invoke('setCustomCode', e);
        }
        async getCustomCode() {
            return this.invoke('getCustomCode');
        }
        subscribeToCustomCode(e) {
            return this.subscribe('customCode', e);
        }
        subscribeToText(e) {
            return this.subscribe('text', e);
        }
        makeDraggable(e, t) {
            return Xe(this, e, t);
        }
        async getCollection() {
            let e = await this.invoke('getCollection');
            return l(e, 'Collection data must be defined'), new pe(e, this);
        }
        notify(e, t) {
            let o = `notification-${Te(this, xe)._++}`;
            return (
                this.invoke('notify', e, {
                    notificationId: o,
                    variant: t?.variant ?? 'info',
                    buttonText: t?.button?.text,
                    durationMs: t?.durationMs,
                }).then((s) => {
                    s === 'actionButtonClicked' && t?.button?.onClick && t.button.onClick(), t?.onDisappear && t.onDisappear();
                }),
                { close: () => this.invoke('closeNotification', o) }
            );
        }
        async getPluginData(e) {
            return this.invoke('getPluginData', e);
        }
        async setPluginData(e, t) {
            return this.invoke('setPluginData', e, t);
        }
        async getPluginDataKeys() {
            return this.invoke('getPluginDataKeys');
        }
        async getColorStyles() {
            return (await this.invoke('getColorStyles')).map((t) => new w(t, this));
        }
        async getColorStyle(e) {
            let t = await this.invoke('getColorStyle', e);
            return t ? new w(t, this) : null;
        }
        async createColorStyle(e) {
            let t = await this.invoke('createColorStyle', e);
            return new w(t, this);
        }
        subscribeToColorStyles(e) {
            return this.subscribe('colorStyles', (t) => {
                let o = t.map((s) => new w(s, this));
                return e(o);
            });
        }
        async getTextStyles() {
            return (await this.invoke('getTextStyles')).map((t) => new R(t, this));
        }
        async getTextStyle(e) {
            let t = await this.invoke('getTextStyle', e);
            return t ? new R(t, this) : null;
        }
        async createTextStyle(e) {
            let t = await this.invoke('createTextStyle', e);
            return new R(t, this);
        }
        subscribeToTextStyles(e) {
            return this.subscribe('textStyles', (t) => {
                let o = t.map((s) => new R(s, this));
                return e(o);
            });
        }
        async getFont(e, t) {
            let o = await this.invoke('getFont', e, t);
            return o ? We(o) : null;
        }
        async getFonts() {
            return (await this.invoke('getFonts')).map(We);
        }
    };
(Pe = new WeakMap()), (xe = new WeakMap()), (z = new WeakMap()), (L = new WeakMap()), (H = new WeakMap()), (V = new WeakMap());
var Ve = new be();
function Ge(n, e) {
    let t = zt(() => (ue(e) ? e() : e));
    Ut(() => {
        let o = n.current;
        if (o instanceof HTMLElement) return Ve.makeDraggable(o, t);
    }, [t]);
}
function zt(n) {
    let e = _t(n);
    return (e.current = n), Ot((...t) => e.current(...t), []);
}
var Ht = K.forwardRef(function ({ data: e, children: t, ...o }, s) {
        let a = K.useRef(null);
        if ((Ge(a, e), K.isValidElement(t))) {
            let u = Object.assign({}, o);
            return g(t.props) && Object.assign(u, t.props), (u.ref = $t(a, s, t.ref)), K.cloneElement(t, u);
        }
        return K.Children.count(t) > 1 && K.Children.only(t), null;
    }),
    Kt = 'current';
function jt(n) {
    return g(n) && Kt in n;
}
function $t(...n) {
    return (e) => {
        for (let t of n) ue(t) ? t(e) : jt(t) && (t.current = e);
    };
}
var Xt = { fixed: !0, sticky: !0, absolute: !0, relative: !0 },
    it = 'position';
function ui(n) {
    if (!(it in n)) return !1;
    let e = n[it];
    return d(e) && Xt[e] === !0;
}
var ot = 'top';
function ci(n) {
    if (!(ot in n)) return !1;
    let e = n[ot];
    return d(e) || P(e);
}
var rt = 'width';
function mi(n) {
    if (!(rt in n)) return !1;
    let e = n[rt];
    return d(e) || P(e);
}
var st = 'maxWidth';
function gi(n) {
    if (!(st in n)) return !1;
    let e = n[st];
    return d(e) || P(e);
}
var at = 'aspectRatio';
function pi(n) {
    if (!(at in n)) return !1;
    let e = n[at];
    return Y(e) || P(e);
}
var lt = 'name';
function hi(n) {
    if (!(lt in n)) return !1;
    let e = n[lt];
    return d(e) || P(e);
}
var dt = 'visible';
function yi(n) {
    if (!(dt in n)) return !1;
    let e = n[dt];
    return Ne(e);
}
var ut = 'locked';
function fi(n) {
    if (!(ut in n)) return !1;
    let e = n[ut];
    return Ne(e);
}
var ct = 'backgroundColor';
function bi(n) {
    if (!(ct in n)) return !1;
    let e = n[ct];
    return d(e) || P(e);
}
var mt = 'backgroundImage';
function Pi(n) {
    if (!(mt in n)) return !1;
    let e = n[mt];
    return e instanceof y || P(e);
}
var gt = 'backgroundImage';
function xi(n) {
    if (!(gt in n)) return !1;
    let e = n[gt];
    return e instanceof y ? !1 : ge(e) || P(e);
}
var pt = 'backgroundGradient';
function Ti(n) {
    if (!(pt in n)) return !1;
    let e = n[pt];
    return q(e) || P(e);
}
var ht = 'backgroundGradient';
function Ni(n) {
    if (!(ht in n)) return !1;
    let e = n[ht];
    return g(e) || P(e);
}
var yt = 'rotation';
function Ii(n) {
    if (!(yt in n)) return !1;
    let e = n[yt];
    return Y(e);
}
var ft = 'opacity';
function Ci(n) {
    if (!(ft in n)) return !1;
    let e = n[ft];
    return Y(e);
}
var bt = 'borderRadius';
function Si(n) {
    if (!(bt in n)) return !1;
    let e = n[bt];
    return d(e) || P(e);
}
var Pt = 'svg';
function vi(n) {
    if (!(Pt in n)) return !1;
    let e = n[Pt];
    return d(e);
}
export {
    te as ComponentInstanceNode,
    ie as ComponentNode,
    M as ConicGradient,
    Ht as Draggable,
    F as FrameNode,
    Q as FramerPluginError,
    G as LinearGradient,
    E as RadialGradient,
    ee as SVGNode,
    J as TextNode,
    ne as WebPageNode,
    Ve as framer,
    ye as isComponentInstanceNode,
    tt as isComponentNode,
    he as isFrameNode,
    vt as isImageAsset,
    Je as isSVGNode,
    Qe as isTextNode,
    et as isWebPageNode,
    pi as supportsAspectRatio,
    bi as supportsBackgroundColor,
    Ti as supportsBackgroundGradient,
    Ni as supportsBackgroundGradientData,
    Pi as supportsBackgroundImage,
    xi as supportsBackgroundImageData,
    Si as supportsBorderRadius,
    fi as supportsLocked,
    hi as supportsName,
    Ci as supportsOpacity,
    ci as supportsPins,
    ui as supportsPosition,
    Ii as supportsRotation,
    vi as supportsSVG,
    mi as supportsSize,
    gi as supportsSizeConstraints,
    yi as supportsVisible,
    Ge as useMakeDraggable,
};
