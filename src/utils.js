


export const fl = (measured_distance, real_width, width_in_rf_image) => {

    return (width_in_rf_image * measured_distance) / real_width
}

export const df = (fl, real_face_width, face_width_in_frame) => {

    return (real_face_width * fl) / face_width_in_frame
}
