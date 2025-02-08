# Expo Camera Image Decoding/Processing Error

This repository demonstrates a bug and its solution related to image decoding or processing errors when using the Expo Camera API. The issue occurs when attempting to display images in specific formats (e.g., some RAW formats, images with corrupted metadata) within the Expo managed workflow.  The error message often indicates a failure in the image processing pipeline.

## Bug Description

The Expo Camera component fails to display images of certain formats, throwing an error during the decoding or processing stage. This is likely due to limitations in Expo's image processing capabilities or incompatibility with the image format. 

## Solution

The solution involves implementing robust error handling and potentially preprocessing images to ensure compatibility with the Expo Camera.  This might include converting the image to a supported format before passing it to the `Camera` component or adding better error handling to gracefully manage decoding errors.

## Usage

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `expo start` to start the Expo development server.

You can then experiment with different image formats to observe the error (see `bug.js`) and the solution (see `bugSolution.js`).