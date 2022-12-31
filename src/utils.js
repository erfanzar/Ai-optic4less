export const fl = (measured_distance, real_width, width_in_rf_image) => {

    return (width_in_rf_image * measured_distance) / real_width
}

export const df = (fl, real_face_width, face_width_in_frame) => {

    return (real_face_width * fl) / face_width_in_frame
}


export const getOperatingSystem = (window) => {
    let operatingSystem = 'Not known';
    if (window.navigator.appVersion.indexOf('Win') !== -1) {
        operatingSystem = 'windows';
    }
    if (window.navigator.appVersion.indexOf('Mac') !== -1) {
        operatingSystem = 'macOS';
    }
    if (window.navigator.appVersion.indexOf('X11') !== -1) {
        operatingSystem = 'unix';
    }
    if (window.navigator.appVersion.indexOf('Linux') !== -1) {
        operatingSystem = 'linux';
    }

    return operatingSystem;
}


export const images = [
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg',
    'BottomSide.jpg',
    'LeftSide.jpg',
    'RightSide.jpg',
    'TopSide.jpg'
]
