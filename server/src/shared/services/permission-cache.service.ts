import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';

@Injectable()
export class PermissionCacheService {
  private cache = new NodeCache({
    stdTTL: 60 * 60,
    checkperiod: 120,
  });

  get(userId: number): string[] | undefined {
    const key = this.key(userId);
    const value = this.cache.get<string[]>(key);

    console.log('[CACHE GET]', key, value);
    return value;
  }

  set(userId: number, permissions: string[]) {
    const key = this.key(userId);
    this.cache.set(key, permissions);

    console.log('[CACHE SET]', key, permissions);
  }

  delete(userId: number) {
    this.cache.del(this.key(userId));
  }

  private key(userId: number) {
    return `permissions:user:${userId}`;
  }
}
