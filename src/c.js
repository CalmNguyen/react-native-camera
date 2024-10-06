import React, { useState, useRef } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Canvas, Image as CanvasImage } from 'react-native-canvas';
import * as faceapi from 'face-api.js';

const MODEL_URL = './models';

export default function cam() {
    const [imageUri, setImageUri] = useState(null);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    const detectFaces = async () => {
        await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
        await faceapi.loadFaceLandmarkModel(MODEL_URL);
        await faceapi.loadFaceExpressionModel(MODEL_URL);

        const options = new faceapi.SsdMobilenetv1Options({ minConfidence: 0.5 });
        const image = imageRef.current;
        const canvas = canvasRef.current;
        if (image && canvas) {
            const detections = await faceapi.detectAllFaces(image, options).withFaceLandmarks().withFaceExpressions();
            const context = canvas.getContext('2d');
            detections.forEach(detection => {
                const box = detection.detection.box;
                context.beginPath();
                context.lineWidth = '2';
                context.strokeStyle = 'red';
                context.rect(box.x, box.y, box.width, box.height);
                context.stroke();
            });
        }
    };

    const takePicture = async () => {
        console.log("in in in in in in1")
        if (this.camera) {
            console.log("in in in in in in")
            const options = { quality: 0.5, base64: true };
            console.log("in in in in in in2")
            const data = await this.camera.takePictureAsync(options);

            console.log("in in in in in in3")
            console.log(data.uri)
            const uri = data.uri
            setImageUri(data.uri);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {imageUri ? (
                <View style={{ flex: 1 }}>

                    <Canvas ref={canvasRef} style={{ flex: 1 }} />
                    <CanvasImage ref={imageRef} src={{ uri: imageUri }} />
                </View>
            ) : (
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{ flex: 1 }}
                    type={RNCamera.Constants.Type.back}
                    captureAudio={false}
                />
            )}
            {imageUri && (
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', padding: 20 }}>
                    {/* <Button title="Detect Faces" onPress={detectFaces} /> */}
                </View>
            )}
            {!imageUri && (
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', padding: 20 }}>
                    <TouchableOpacity onPress={takePicture}
                        style={{ backgroundColor: 'blue' }}>
                        <Text>
                            Take picture
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
