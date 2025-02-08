// bugSolution.js
import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleImagePicked = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      try {
        // Preprocess the image here if necessary (e.g., convert format)
        setImage(result.uri);
        setError(null);
      } catch (e) {
        setError('Failed to process image. Please try a different format.');
      }
    }
  };

  if (hasPermission === null) {
    return <View />; 
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
      {error && <Text>{error}</Text>}
      <Button title="Pick an image from library" onPress={handleImagePicked} />
    </View>
  );
};
export default App;