import * as React from 'react';
import Svg, { G, Ellipse, Path } from 'react-native-svg';

function Default_upload_image_url(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={88.167} height={89.167} viewBox="0 0 88.167 89.167" {...props}>
            <G transform="translate(-156.443 -480.014) translate(157 481)" data-name="Group 936">
                <Ellipse
                    cx={43.5}
                    cy={44}
                    rx={43.5}
                    ry={44}
                    transform="translate(.026 -.403)"
                    fill="#f5f5f5"
                    stroke="#444"
                    strokeMiterlimit={10}
                    strokeWidth={1.167}
                />
                <Path
                    d="M0 52.474c7.246-3.487 17.593-7.2 28.946-7.2s21.7 3.711 28.943 7.2a36.086 36.086 0 01-57.889 0zm8.117-31.645a20.827 20.827 0 1120.829 20.825A20.853 20.853 0 018.117 20.829z"
                    transform="translate(14.522 12.678)"
                    fill="#999"
                />
            </G>
        </Svg>
    );
}

export default Default_upload_image_url;
