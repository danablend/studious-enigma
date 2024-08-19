var kt = Object.defineProperty;
var Dt = (n, e, t) => (e in n ? kt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t));
var i = (n, e, t) => (Dt(n, typeof e != 'symbol' ? e + '' : e, t), t),
    $e = (n, e, t) => {
        if (!e.has(n)) throw TypeError('Cannot ' + t);
    };
var r = (n, e, t) => ($e(n, e, 'read from private field'), t ? t.call(n) : e.get(n)),
    c = (n, e, t) => {
        if (e.has(n)) throw TypeError('Cannot add the same private member more than once');
        e instanceof WeakSet ? e.add(n) : e.set(n, t);
    },
    m = (n, e, t, o) => ($e(n, e, 'write to private field'), o ? o.call(n, t) : e.set(n, t), t);
var ve = (n, e, t, o) => ({
    set _(s) {
        m(n, e, s, t);
    },
    get _() {
        return r(n, e, o);
    },
});
import X from 'react';
import { useCallback as qt, useEffect as Zt, useRef as Qt } from 'react';
var At = 'invoke';
function b(n) {
    return At in n;
}
function x(n) {
    return n === null;
}
function Se(n) {
    return n === !0 || n === !1;
}
function d(n) {
    return typeof n == 'string';
}
function Q(n) {
    return typeof n == 'number' && Number.isFinite(n);
}
function he(n) {
    return typeof n == 'function';
}
function g(n) {
    return typeof n == 'object' && n !== null && !Array.isArray(n);
}
function ke(n) {
    return Array.isArray(n);
}
function k(n, e) {
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
var Ft = 'FileAsset',
    Wt = '__class';
function Ye(n) {
    return g(n) ? n[Wt] === Ft : !1;
}
var J = class {
    constructor(e) {
        i(this, 'id');
        i(this, 'url');
        i(this, 'extension');
        (this.url = e.url), (this.id = e.id), (this.extension = e.extension);
    }
};
function wt(n) {
    return n instanceof J;
}
var Rt = 'ImageAsset',
    Lt = '__class';
function B(n) {
    return g(n) ? n[Lt] === Rt : !1;
}
var F,
    G,
    Ae = class Ae {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'url');
            i(this, 'thumbnailUrl');
            i(this, 'altText');
            c(this, F, void 0);
            c(this, G, void 0);
            l(b(t)), m(this, G, t), (this.url = e.url), (this.id = e.id), (this.thumbnailUrl = e.thumbnailUrl), (this.altText = e.altText);
        }
        cloneWithAttributes({ altText: e }) {
            return new Ae(
                { __class: 'ImageAsset', id: this.id, url: this.url, thumbnailUrl: this.thumbnailUrl, altText: e !== void 0 ? e : this.altText },
                r(this, G)
            );
        }
        async measure() {
            return Gt(this.url);
        }
        async getData() {
            if (r(this, F) && r(this, F).bytes.length > 0) return r(this, F);
            let e = await r(this, G).invoke('getImageData', { id: this.id });
            if (!e) throw new Error('Failed to load image data');
            return m(this, F, e), e;
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
(F = new WeakMap()), (G = new WeakMap());
var p = Ae;
function Mt(n) {
    return n instanceof p;
}
function O(n) {
    return n.type === 'bytes' ? [n.bytes.buffer] : [];
}
function Vt(n) {
    if (!g(n)) return !1;
    let e = 'bytes',
        t = 'mimeType';
    return !(!(e in n) || !(t in n) || !(n[e] instanceof Uint8Array) || !d(n[t]));
}
async function ee(n) {
    return n instanceof File
        ? Xe(n)
        : n.image instanceof File
        ? Xe(n.image)
        : Vt(n.image)
        ? { name: n.name, altText: n.altText, type: 'bytes', mimeType: n.image.mimeType, bytes: n.image.bytes }
        : { name: n.name, altText: n.altText, type: 'url', url: n.image };
}
function De(n) {
    return Promise.all(n.map(ee));
}
function Et(n) {
    if (!n.startsWith('image/')) throw new Error(`Unsupported mime type: ${n}`);
}
async function Xe(n) {
    return new Promise((e, t) => {
        let o = new FileReader();
        (o.onload = (s) => {
            let a = n.type;
            Et(n.type);
            let u = s.target?.result;
            if (!u || !(u instanceof ArrayBuffer)) {
                t(new Error('Failed to read file, arrayBuffer is null'));
                return;
            }
            let v = new Uint8Array(u);
            e({ bytes: v, mimeType: a, type: 'bytes' });
        }),
            (o.onerror = (s) => {
                t(s);
            }),
            o.readAsArrayBuffer(n);
    });
}
async function Gt(n) {
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
var qe = '__class',
    Fe = 'LinearGradient',
    We = 'RadialGradient',
    we = 'ConicGradient';
function ye(n) {
    if (!g(n)) return !1;
    switch (n[qe]) {
        case Fe:
        case We:
        case we:
            return !0;
        default:
            return !1;
    }
}
function te(n) {
    return n instanceof U || n instanceof _ || n instanceof z;
}
function Ze(n) {
    if (n instanceof U) return { __class: Fe, angle: n.angle, stops: n.stops };
    if (n instanceof _) return { __class: We, width: n.width, height: n.height, x: n.x, y: n.y, stops: n.stops };
    if (n instanceof z) return { __class: we, angle: n.angle, x: n.x, y: n.y, stops: n.stops };
    k(n);
}
function fe(n) {
    switch (n[qe]) {
        case Fe:
            return new U(n);
        case We:
            return new _(n);
        case we:
            return new z(n);
        default:
            k(n);
    }
}
var U = class n {
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
    _ = class n {
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
    z = class n {
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
function W(n) {
    if (Ot(n)) return Ut(n);
    if (ke(n)) return n.map(W);
    if (g(n)) {
        let e = {};
        for (let t in n) e[t] = W(n[t]);
        return e;
    }
    return n;
}
function Qe(n, e) {
    let t = {};
    for (let o in n) t[o] = Re(n[o], e);
    return t;
}
function Re(n, e) {
    if (Bt(n))
        switch (n.__class) {
            case 'ImageAsset':
                return new p(n, e);
            case 'LinearGradient':
            case 'RadialGradient':
            case 'ConicGradient':
                return fe(n);
            default:
                k(n);
        }
    if (g(n)) {
        let t = {};
        for (let o in n) t[o] = Re(n[o], e);
        return t;
    }
    return ke(n) ? n.map((t) => Re(t, e)) : n;
}
function Bt(n) {
    return !!(B(n) || ye(n));
}
function Ot(n) {
    return !!(n instanceof p || te(n));
}
function Ut(n) {
    if (n instanceof p) return { __class: 'ImageAsset', id: n.id, thumbnailUrl: n.thumbnailUrl, url: n.url, altText: n.altText };
    if (te(n)) return Ze(n);
    k(n);
}
function _t(n, e) {
    for (let t in n) {
        let o = n[t];
        B(o) && (n[t] = new p(o, e)), Ye(o) && (n[t] = new J(o));
    }
}
var P,
    be = class {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'name');
            c(this, P, void 0);
            l(d(e.id), 'Node must have an id'),
                l(d(e.name), 'Node must have a name'),
                (this.id = e.id),
                (this.name = e.name),
                l(b(t)),
                m(this, P, t),
                Object.freeze(this);
        }
        async getItemIds() {
            return r(this, P).invoke('getManagedCollectionItemIds', this.id);
        }
        async setItemOrder(e) {
            return r(this, P).invoke('setManagedCollectionItemOrder', this.id, e);
        }
        async getFields() {
            return r(this, P).invoke('getManagedCollectionFields', this.id);
        }
        async setFields(e) {
            return r(this, P).invoke('setManagedCollectionFields', this.id, e);
        }
        async addItems(e) {
            return r(this, P).invoke('addManagedCollectionItems', this.id, e);
        }
        async removeItems(e) {
            return r(this, P).invoke('removeManagedCollectionItems', this.id, e);
        }
        async setPluginData(e, t) {
            return r(this, P).invoke('setPluginDataForNode', this.id, e, t);
        }
        async getPluginData(e) {
            return r(this, P).invoke('getPluginDataForNode', this.id, e);
        }
        async getPluginDataKeys() {
            return r(this, P).invoke('getPluginDataKeysForNode', this.id);
        }
    };
P = new WeakMap();
var T,
    ne = class {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'name');
            c(this, T, void 0);
            l(d(e.id), 'Node must have an id'),
                l(d(e.name), 'Node must have a name'),
                (this.id = e.id),
                (this.name = e.name),
                l(b(t)),
                m(this, T, t),
                Object.freeze(this);
        }
        async getFields() {
            return r(this, T).invoke('getCollectionFields', this.id);
        }
        async getItems() {
            return (await r(this, T).invoke('getCollectionItems', this.id)).map((t) => new Le(t, r(this, T)));
        }
        async setPluginData(e, t) {
            return r(this, T).invoke('setPluginDataForNode', this.id, e, t);
        }
        async getPluginData(e) {
            return r(this, T).invoke('getPluginDataForNode', this.id, e);
        }
        async getPluginDataKeys() {
            return r(this, T).invoke('getPluginDataKeysForNode', this.id);
        }
    };
T = new WeakMap();
var w,
    Le = class {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'slug');
            i(this, 'fieldData');
            c(this, w, void 0);
            (this.id = e.id),
                (this.slug = e.slug),
                (this.fieldData = e.fieldData),
                _t(this.fieldData, t),
                l(b(t)),
                m(this, w, t),
                Object.freeze(this),
                Object.freeze(this.fieldData);
        }
        async setPluginData(e, t) {
            return r(this, w).invoke('setPluginDataForNode', this.id, e, t);
        }
        async getPluginData(e) {
            return r(this, w).invoke('getPluginDataForNode', this.id, e);
        }
        async getPluginDataKeys() {
            return r(this, w).invoke('getPluginDataKeysForNode', this.id);
        }
    };
w = new WeakMap();
var zt = (() => {
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
    Je = 5,
    Ht = (() => {
        let n = 1;
        return { next: () => `drag-${n++}` };
    })();
function Kt() {}
function et(n, e, t) {
    if (!(n.mode === 'canvas' || n.mode === 'default')) return Kt;
    l(b(n));
    let o = Ht.next(),
        s = document.body.style.cursor,
        a = { type: 'idle' },
        u = document.body,
        v = (y) => {
            a.type !== 'idle' && (a.type === 'dragging' && n.invoke('onDragEnd', { ...y, dragSessionId: o }), (a = { type: 'idle' }), St());
        },
        ce = (y) => {
            if (a.type === 'idle') return;
            if (!(y.buttons > 0 && !!(y.buttons & 1))) {
                v({ cancelled: !1 });
                return;
            }
            let { clientX: me, clientY: q } = y;
            if (a.type === 'pointerDown') {
                let Z = me - a.dragStart.mouse.x,
                    je = q - a.dragStart.mouse.y;
                if (Math.abs(Z) < Je && Math.abs(je) < Je) return;
                (a = { type: 'dragging', dragStart: a.dragStart }),
                    n.invoke('onDragStart', a.dragStart),
                    document.getSelection()?.empty(),
                    zt.disableUntilMouseUp();
            }
            u.setPointerCapture(y.pointerId);
            let ge = { x: me, y: q };
            n.invoke('onDrag', { dragSessionId: o, mouse: ge }).then((Z) => {
                a.type === 'dragging' && (document.body.style.cursor = Z ?? '');
            });
        },
        _e = (y) => {
            y.key === 'Escape' && v({ cancelled: !0 });
        },
        ze = () => {
            v({ cancelled: !0 });
        },
        He = (y) => {
            v({ cancelled: !0 });
            let Y = e.getBoundingClientRect(),
                me = { x: Y.x, y: Y.y, width: Y.width, height: Y.height },
                q,
                ge = e.querySelectorAll('svg');
            if (ge.length === 1) {
                let pe = ge.item(0).getBoundingClientRect();
                q = { x: pe.x, y: pe.y, width: pe.width, height: pe.height };
            }
            let Z = { x: y.clientX, y: y.clientY };
            (a = { type: 'pointerDown', dragStart: { dragSessionId: o, elementRect: me, svgRect: q, mouse: Z } }),
                n.invoke('setDragData', o, t()),
                u.addEventListener('pointermove', ce, !0),
                u.addEventListener('pointerup', ce, !0),
                window.addEventListener('keydown', _e, !0),
                window.addEventListener('blur', ze);
        },
        Ke = () => {
            let y = t();
            y.type === 'detachedComponentLayers' && n.invoke('preloadDetachedComponentLayers', y.url),
                y.type === 'image' && n.invoke('preloadImageUrlForInsertion', y.image),
                y.previewImage && n.invoke('preloadDragPreviewImage', y.previewImage);
        };
    e.addEventListener('pointerdown', He), e.addEventListener('mouseenter', Ke);
    function St() {
        (document.body.style.cursor = s),
            u.removeEventListener('pointermove', ce, !0),
            u.removeEventListener('pointerup', ce, !0),
            window.removeEventListener('keydown', _e, !0),
            window.removeEventListener('blur', ze);
    }
    return () => {
        e.removeEventListener('pointerdown', He), e.removeEventListener('mouseenter', Ke), v({ cancelled: !0 });
    };
}
var ie = class extends Error {};
var D = class {
        constructor(e) {
            i(this, 'selector');
            i(this, 'family');
            i(this, 'weight');
            i(this, 'style');
            (this.selector = e.selector), (this.family = e.family), (this.weight = e.weight), (this.style = e.style);
        }
    },
    tt = new Map();
function Me(n) {
    let e = tt.get(n.selector);
    if (e) return e;
    let t = new D(n);
    return tt.set(n.selector, t), t;
}
var jt = { canvas: !0, default: !0, image: !0, editImage: !0, configureManagedCollection: !0, syncManagedCollection: !0, collection: !0 };
function nt(n) {
    return d(n) && n in jt;
}
var $t = { methodResponse: !0, pluginReadyResponse: !0, subscriptionMessage: !0 };
function Xt(n) {
    return d(n) && n in $t;
}
function it(n) {
    return g(n) && Xt(n['type']);
}
var ue,
    f,
    N,
    S = class {
        constructor(e, t) {
            i(this, 'id');
            c(this, ue, void 0);
            c(this, f, void 0);
            c(this, N, void 0);
            l(d(e.id), 'Node must have an id'), (this.id = e.id), m(this, f, t), m(this, ue, e.originalId ?? null), l(b(t)), m(this, N, t);
        }
        get isReplica() {
            return r(this, ue) !== null;
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
            return R(this) ? Promise.resolve([]) : r(this, f).getChildren(this.id);
        }
        async getNodesWithType(e) {
            return R(this) ? Promise.resolve([]) : (await r(this, N).invoke('getNodesWithType', this.id, e)).map((o) => h(o, r(this, f)));
        }
        async getNodesWithAttribute(e) {
            return R(this) ? Promise.resolve([]) : (await r(this, N).invoke('getNodesWithAttribute', this.id, e)).map((o) => h(o, r(this, f)));
        }
        async getNodesWithAttributeSet(e) {
            return R(this) ? Promise.resolve([]) : (await r(this, N).invoke('getNodesWithAttributeSet', this.id, e)).map((o) => h(o, r(this, f)));
        }
        async *walk() {
            if ((yield this, !R(this))) for (let e of await this.getChildren()) yield* e.walk();
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
    };
(ue = new WeakMap()), (f = new WeakMap()), (N = new WeakMap());
var L = class extends S {
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
                (this.backgroundImage = t.backgroundImage ? new p(t.backgroundImage, o) : null),
                (this.rotation = t.rotation ?? 0),
                (this.opacity = t.opacity ?? 1),
                (this.borderRadius = t.borderRadius ?? null),
                (this.backgroundGradient = ye(t.backgroundGradient) ? fe(t.backgroundGradient) : null),
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
    H,
    oe = class extends S {
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
            c(this, H, void 0);
            l(b(o)),
                m(this, H, o),
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
            await r(this, H).invoke('setTextForNode', this.id, t);
        }
        async getText() {
            return r(this, H).invoke('getTextForNode', this.id);
        }
    };
H = new WeakMap();
var re = class extends S {
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
    se = class extends S {
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
                (this.controls = Qe(t.controls ?? {}, o)),
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
    ae = class extends S {
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
    le = class extends S {
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
    de = class extends S {
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
function h(n, e) {
    switch (n.__class) {
        case 'WebPageNode':
            return new ae(n, e);
        case 'ComponentNode':
            return new le(n, e);
        case 'ComponentInstanceNode':
            return new se(n, e);
        case 'FrameNode':
            return new L(n, e);
        case 'SVGNode':
            return new re(n, e);
        case 'TextNode':
            return new oe(n, e);
        case 'UnknownNode':
            return new de(n, e);
        default:
            return new de(n, e);
    }
}
function Ve(n) {
    return W(n);
}
function Pe(n) {
    return n instanceof L;
}
function ot(n) {
    return n instanceof oe;
}
function rt(n) {
    return n instanceof re;
}
function xe(n) {
    return n instanceof se;
}
function st(n) {
    return n instanceof ae;
}
function at(n) {
    return n instanceof le;
}
function R(n) {
    return n instanceof de;
}
function Te(n) {
    return !!(Pe(n) || ot(n) || xe(n) || rt(n) || R(n));
}
function Ee(n) {
    return !!(st(n) || at(n) || R(n));
}
var I,
    Ge = class Ge {
        constructor(e, t) {
            i(this, 'id');
            i(this, 'name');
            i(this, 'light');
            i(this, 'dark');
            c(this, I, void 0);
            l(d(e.id), 'Style must have an id'),
                (this.id = e.id),
                (this.name = e.name),
                (this.light = e.light),
                (this.dark = e.dark),
                l(b(t)),
                m(this, I, t);
        }
        async setAttributes(e) {
            let t = await r(this, I).invoke('setColorStyleAttributes', this.id, e);
            return t ? new Ge(t, r(this, I)) : null;
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
            return r(this, I).invoke('removeColorStyle', this.id);
        }
    };
I = new WeakMap();
var M = Ge,
    C,
    Be = class Be {
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
            c(this, C, void 0);
            l(d(e.id), 'Style must have an id'),
                (this.id = e.id),
                (this.name = e.name),
                (this.tag = e.tag),
                (this.font = new D(e.font)),
                (this.boldFont = e.boldFont ? new D(e.boldFont) : null),
                (this.italicFont = e.italicFont ? new D(e.italicFont) : null),
                (this.boldItalicFont = e.boldItalicFont ? new D(e.boldItalicFont) : null),
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
                l(b(t)),
                m(this, C, t);
        }
        async setAttributes(e) {
            let t = await r(this, C).invoke('setTextStyleAttributes', this.id, e);
            return t ? new Be(t, r(this, C)) : null;
        }
        async getPluginData(e) {
            return r(this, C).invoke('getPluginDataForNode', this.id, e);
        }
        async setPluginData(e, t) {
            return r(this, C).invoke('setPluginDataForNode', this.id, e, t);
        }
        async getPluginDataKeys() {
            return r(this, C).invoke('getPluginDataKeysForNode', this.id);
        }
        async remove() {
            return r(this, C).invoke('removeTextStyle', this.id);
        }
    };
C = new WeakMap();
var V = Be;
var K = null;
function lt(n) {
    if (!K) {
        let t = document.createElement('style');
        document.head.appendChild(t), (K = t.sheet);
    }
    if (!K) {
        n();
        return;
    }
    let e = K.insertRule('* { transition: none !important; animation: none !important; }');
    n(),
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                K && K.deleteRule(e);
            });
        });
}
var Yt = 2,
    Ie,
    Ce,
    j,
    E,
    $,
    A,
    Ne = class {
        constructor({ isTestEnv: e } = {}) {
            c(this, Ie, 0);
            c(this, Ce, 0);
            c(this, j, []);
            c(this, E, void 0);
            c(this, $, new Map());
            c(this, A, void 0);
            i(this, 'subscriptions', new Map());
            i(this, 'onMessage', (e) => {
                let t = e.data;
                if (it(t))
                    switch (t.type) {
                        case 'pluginReadyResponse': {
                            if (!e.source) throw new Error("No 'source' on incoming message: " + t.type);
                            l(r(this, A) === t.mode, 'Mode must match'),
                                this.applyPluginTheme(t.theme),
                                m(this, E, (s, a) => window.parent.postMessage(s, e.origin, a));
                            for (let s of r(this, j)) r(this, E).call(this, ...s);
                            m(this, j, []);
                            break;
                        }
                        case 'methodResponse': {
                            let o = r(this, $).get(t.id);
                            if (!o) throw new Error(`No handler for response with id ${t.id}`);
                            r(this, $).delete(t.id), t.error ? o.reject(new ie(t.error)) : o.resolve(t.result);
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
                            k(t);
                    }
            });
            i(this, 'applyPluginTheme', (e) => {
                lt(() => {
                    document.body.setAttribute('data-framer-theme', e.mode);
                    for (let t in e.tokens) document.body.style.setProperty(t, e.tokens[t]);
                });
            });
            if (e) {
                m(this, A, 'canvas');
                return;
            }
            if (typeof window > 'u') {
                console.warn('Framer Plugin API is not supported in non-browser environments'), m(this, A, 'canvas');
                return;
            }
            let o = new URL(window.location.href).searchParams.get('mode');

            //l(nt(o), `Invalid mode: ${o}`), m(this, A, o), window.addEventListener('message', this.onMessage);
            
            let s = { type: 'pluginReadySignal', breakingChangesVersion: Yt };
            window.parent.postMessage(s, '*'),
                this.subscribe('theme', this.applyPluginTheme),
                window.addEventListener('pointerdown', () => {
                    this.invoke('onPointerDown');
                });
        }
        get mode() {
            return r(this, A);
        }
        invoke(e, ...t) {
            return this.invokeTransferable(e, void 0, ...t);
        }
        invokeTransferable(e, t, ...o) {
            return new Promise((s, a) => {
                let u = { args: o, methodName: e, id: ve(this, Ie)._++, type: 'methodInvocation' },
                    v = s;
                r(this, $).set(u.id, { resolve: v, reject: a }), this.queueMessage(u, t);
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
            if (!r(this, E)) {
                r(this, j).push([e, t]);
                return;
            }
            r(this, E).call(this, e, t);
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
                let o = h(t, this);
                return l(Te(o)), o;
            });
        }
        async setSelection(e) {
            let t = d(e) ? [e] : Array.from(e);
            return this.invoke('setSelection', t);
        }
        subscribeToSelection(e) {
            return this.subscribe('selection', (t) => {
                let o = t.map((s) => {
                    let a = h(s, this);
                    return l(Te(a)), a;
                });
                e(o);
            });
        }
        async getCanvasRoot() {
            let e = await this.invoke('getCanvasRoot'),
                t = h(e, this);
            return l(Ee(t)), t;
        }
        subscribeToCanvasRoot(e) {
            return this.subscribe('canvasRoot', (t) => {
                let o = h(t, this);
                l(Ee(o)), e(o);
            });
        }
        async getPublishInfo() {
            return this.invoke('getPublishInfo');
        }
        subscribeToPublishInfo(e) {
            return this.subscribe('publishInfo', e);
        }
        async createFrameNode(e, t) {
            let o = Ve(e),
                s = await this.invoke('createNode', 'FrameNode', t ?? null, o);
            if (!s) return null;
            let a = h(s, this);
            return l(a instanceof L), a;
        }
        async removeNode(e) {
            return this.invoke('removeNode', e);
        }
        async cloneNode(e) {
            let t = await this.invoke('cloneNode', e);
            return t ? h(t, this) : null;
        }
        async getNode(e) {
            let t = await this.invoke('getNode', e);
            return t ? h(t, this) : null;
        }
        async getParent(e) {
            let t = await this.invoke('getParent', e);
            return t ? h(t, this) : null;
        }
        async getChildren(e) {
            return (await this.invoke('getChildren', e)).map((o) => {
                let s = h(o, this);
                return l(Te(s)), s;
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
            let o = Ve(t),
                s = await this.invoke('setAttributes', e, o);
            return s ? h(s, this) : null;
        }
        async setParent(e, t, o) {
            return this.invoke('setParent', e, t, o);
        }
        async getNodesWithType(e) {
            return (await this.invoke('getNodesWithType', null, e)).map((o) => h(o, this));
        }
        async getNodesWithAttribute(e) {
            return (await this.invoke('getNodesWithAttribute', null, e)).map((o) => h(o, this));
        }
        async getNodesWithAttributeSet(e) {
            return (await this.invoke('getNodesWithAttributeSet', null, e)).map((o) => h(o, this));
        }
        async getImage() {
            let e = await this.invoke('getImage');
            return e ? new p(e, this) : null;
        }
        subscribeToImage(e) {
            return this.subscribe('image', (t) => {
                if (!t) {
                    e(null);
                    return;
                }
                e(new p(t, this));
            });
        }
        async addImage(e) {
            let t = await ee(e),
                o = O(t);
            return this.invokeTransferable('addImage', o, t);
        }
        async setImage(e) {
            let t = await ee(e),
                o = O(t);
            return this.invokeTransferable('setImage', o, t);
        }
        async uploadImage(e) {
            let t = await ee(e),
                o = O(t),
                s = await this.invokeTransferable('uploadImage', o, t);
            return new p(s, this);
        }
        async addImages(e) {
            let t = await De(e),
                o = t.flatMap(O);
            await this.invokeTransferable('addImages', o, t);
        }
        async uploadImages(e) {
            let t = await De(e),
                o = t.flatMap(O),
                s = await this.invokeTransferable('uploadImages', o, t),
                a = [];
            for (let u of s) a.push(new p(u, this));
            return a;
        }
        async addSVG(e) {
            return this.invoke('addSVG', e);
        }
        async addComponentInstance({ url: e, attributes: t }) {
            let o = W(t),
                s = await this.invoke('addComponentInstance', { url: e, attributes: g(o) ? o : void 0 }),
                a = h(s, this);
            return l(xe(a)), a;
        }
        async addDetachedComponentLayers({ url: e, layout: t, attributes: o }) {
            let s = W(o),
                a = await this.invoke('addDetachedComponentLayers', { url: e, layout: t, attributes: g(s) ? s : void 0 }),
                u = h(a, this);
            return l(Pe(u)), u;
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
            return et(this, e, t);
        }
        async getManagedCollection() {
            let e = await this.invoke('getManagedCollection');
            return l(e, 'Collection data must be defined'), new be(e, this);
        }
        async getCollection() {
            let e = await this.invoke('getCollection');
            return l(e, 'Collection data must be defined'), new ne(e, this);
        }
        async getCollections() {
            return (await this.invoke('getCollections')).map((t) => new ne(t, this));
        }
        notify(e, t) {
            let o = `notification-${ve(this, Ce)._++}`;
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
            return (await this.invoke('getColorStyles')).map((t) => new M(t, this));
        }
        async getColorStyle(e) {
            let t = await this.invoke('getColorStyle', e);
            return t ? new M(t, this) : null;
        }
        async createColorStyle(e) {
            let t = await this.invoke('createColorStyle', e);
            return new M(t, this);
        }
        subscribeToColorStyles(e) {
            return this.subscribe('colorStyles', (t) => {
                let o = t.map((s) => new M(s, this));
                return e(o);
            });
        }
        async getTextStyles() {
            return (await this.invoke('getTextStyles')).map((t) => new V(t, this));
        }
        async getTextStyle(e) {
            let t = await this.invoke('getTextStyle', e);
            return t ? new V(t, this) : null;
        }
        async createTextStyle(e) {
            let t = await this.invoke('createTextStyle', e);
            return new V(t, this);
        }
        subscribeToTextStyles(e) {
            return this.subscribe('textStyles', (t) => {
                let o = t.map((s) => new V(s, this));
                return e(o);
            });
        }
        async getFont(e, t) {
            let o = await this.invoke('getFont', e, t);
            return o ? Me(o) : null;
        }
        async getFonts() {
            return (await this.invoke('getFonts')).map(Me);
        }
    };
(Ie = new WeakMap()), (Ce = new WeakMap()), (j = new WeakMap()), (E = new WeakMap()), ($ = new WeakMap()), (A = new WeakMap());
var Oe = new Ne();
function Ue(n, e) {
    let t = Jt(() => (he(e) ? e() : e));
    Zt(() => {
        let o = n.current;
        if (o instanceof HTMLElement) return Oe.makeDraggable(o, t);
    }, [t]);
}
function Jt(n) {
    let e = Qt(n);
    return (e.current = n), qt((...t) => e.current(...t), []);
}
var en = X.forwardRef(function ({ data: e, children: t, ...o }, s) {
        let a = X.useRef(null);
        if ((Ue(a, e), X.isValidElement(t))) {
            let u = Object.assign({}, o);
            return g(t.props) && Object.assign(u, t.props), (u.ref = on(a, s, t.ref)), X.cloneElement(t, u);
        }
        return X.Children.count(t) > 1 && X.Children.only(t), null;
    }),
    tn = 'current';
function nn(n) {
    return g(n) && tn in n;
}
function on(...n) {
    return (e) => {
        for (let t of n) he(t) ? t(e) : nn(t) && (t.current = e);
    };
}
var rn = { fixed: !0, sticky: !0, absolute: !0, relative: !0 },
    dt = 'position';
function Ti(n) {
    if (!(dt in n)) return !1;
    let e = n[dt];
    return d(e) && rn[e] === !0;
}
var ut = 'top';
function Ni(n) {
    if (!(ut in n)) return !1;
    let e = n[ut];
    return d(e) || x(e);
}
var ct = 'width';
function Ii(n) {
    if (!(ct in n)) return !1;
    let e = n[ct];
    return d(e) || x(e);
}
var mt = 'maxWidth';
function Ci(n) {
    if (!(mt in n)) return !1;
    let e = n[mt];
    return d(e) || x(e);
}
var gt = 'aspectRatio';
function vi(n) {
    if (!(gt in n)) return !1;
    let e = n[gt];
    return Q(e) || x(e);
}
var pt = 'name';
function Si(n) {
    if (!(pt in n)) return !1;
    let e = n[pt];
    return d(e) || x(e);
}
var ht = 'visible';
function ki(n) {
    if (!(ht in n)) return !1;
    let e = n[ht];
    return Se(e);
}
var yt = 'locked';
function Di(n) {
    if (!(yt in n)) return !1;
    let e = n[yt];
    return Se(e);
}
var ft = 'backgroundColor';
function Ai(n) {
    if (!(ft in n)) return !1;
    let e = n[ft];
    return d(e) || x(e);
}
var bt = 'backgroundImage';
function Fi(n) {
    if (!(bt in n)) return !1;
    let e = n[bt];
    return e instanceof p || x(e);
}
var Pt = 'backgroundImage';
function Wi(n) {
    if (!(Pt in n)) return !1;
    let e = n[Pt];
    return e instanceof p ? !1 : B(e) || x(e);
}
var xt = 'backgroundGradient';
function wi(n) {
    if (!(xt in n)) return !1;
    let e = n[xt];
    return te(e) || x(e);
}
var Tt = 'backgroundGradient';
function Ri(n) {
    if (!(Tt in n)) return !1;
    let e = n[Tt];
    return g(e) || x(e);
}
var Nt = 'rotation';
function Li(n) {
    if (!(Nt in n)) return !1;
    let e = n[Nt];
    return Q(e);
}
var It = 'opacity';
function Mi(n) {
    if (!(It in n)) return !1;
    let e = n[It];
    return Q(e);
}
var Ct = 'borderRadius';
function Vi(n) {
    if (!(Ct in n)) return !1;
    let e = n[Ct];
    return d(e) || x(e);
}
var vt = 'svg';
function Ei(n) {
    if (!(vt in n)) return !1;
    let e = n[vt];
    return d(e);
}
export {
    se as ComponentInstanceNode,
    le as ComponentNode,
    z as ConicGradient,
    en as Draggable,
    L as FrameNode,
    ie as FramerPluginError,
    U as LinearGradient,
    _ as RadialGradient,
    re as SVGNode,
    oe as TextNode,
    ae as WebPageNode,
    Oe as framer,
    xe as isComponentInstanceNode,
    at as isComponentNode,
    wt as isFileAsset,
    Pe as isFrameNode,
    Mt as isImageAsset,
    rt as isSVGNode,
    ot as isTextNode,
    st as isWebPageNode,
    vi as supportsAspectRatio,
    Ai as supportsBackgroundColor,
    wi as supportsBackgroundGradient,
    Ri as supportsBackgroundGradientData,
    Fi as supportsBackgroundImage,
    Wi as supportsBackgroundImageData,
    Vi as supportsBorderRadius,
    Di as supportsLocked,
    Si as supportsName,
    Mi as supportsOpacity,
    Ni as supportsPins,
    Ti as supportsPosition,
    Li as supportsRotation,
    Ei as supportsSVG,
    Ii as supportsSize,
    Ci as supportsSizeConstraints,
    ki as supportsVisible,
    Ue as useMakeDraggable,
};
