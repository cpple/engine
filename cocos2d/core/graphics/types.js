'use strict';

/**
 * !#en Enum for LineCap.
 * !#zh 线段末端属性
 * @enum Graphics.LineCap
 */
var LineCap = cc.Enum({
    /**
     * !#en The ends of lines are squared off at the endpoints.
     * !#zh 线段末端以方形结束。
     * @property {Number} BUTT
     */
    BUTT: 0,

    /**
     * !#en The ends of lines are rounded.
     * !#zh 线段末端以圆形结束。
     * @property {Number} ROUND
     */
    ROUND: 1,

    /**
     * !#en The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.
     * !#zh 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。
     * @property {Number} SQUARE
     */
    SQUARE: 2,
});

/**
 * !#en Enum for LineJoin.
 * !#zh 线段拐角属性
 * @enum Graphics.LineJoin
 */
var LineJoin = cc.Enum({
    /**
     * !#en Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
     * !#zh 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
     * @property {Number} BEVEL
     */
    BEVEL: 0,

    /**
     * !#en Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
     * !#zh 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
     * @property {Number} ROUND
     */
    ROUND: 1,

    /**
     * !#en Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area.
     * !#zh 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。
     * @property {Number} MITER
     */
    MITER: 2
});

module.exports = {
    LineCap:    LineCap,
    LineJoin:   LineJoin
};
