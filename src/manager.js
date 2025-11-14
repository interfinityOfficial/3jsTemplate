import { LoadingManager } from 'three';

export function manager() {
    const manager = new LoadingManager();
    manager.onLoad = () => {
        console.log('Loading complete');
    }
    manager.onError = () => {
        console.log('Loading error');
    }
    return manager;
}

