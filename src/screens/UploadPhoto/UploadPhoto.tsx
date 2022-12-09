import React from "react";
import { View } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

const UploadPhoto = () => {

    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });

      ImagePicker.openCropper({
          path: 'my-file-path.jpg',
          width: 300,
          height: 400,
          mediaType: "photo"
      }).then(image => {
        console.log(image);
      });
    return(
        <View></View>
    );
}

export default UploadPhoto;