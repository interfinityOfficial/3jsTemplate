import * as THREE from 'three';

export const addAmbientLight = () => {
    const light = new THREE.AmbientLight(0xffffff, 0.4);
    return light;
}

export const addPointLight = ({ x = 0, y = 0, z = 0 } = {}) => {
    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(x, y, z);
    return light;
}

export const addKeyLight = ({ x = 0, y = 0, z = 0 } = {}) => {
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(x, y, z);
    return light;
}

export const addRimLight = ({ x = 0, y = 0, z = 0 } = {}) => {
    const light = new THREE.PointLight(0xffffff, 2, 10);
    light.position.set(x, y, z);
    return light;
}

export const addDirectionalLight = ({ x = 0, y = 0, z = 0 } = {}) => {
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(x, y, z);
    return light;
}