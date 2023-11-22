export const TextureAnisotropy = (renderer, texture) => {
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 50);
}