import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260329000001 extends Migration {
  override async up(): Promise<void> {
    this.addSql(`ALTER TABLE "architect_profile" ADD COLUMN IF NOT EXISTS "password_hash" text null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`ALTER TABLE "architect_profile" DROP COLUMN IF EXISTS "password_hash";`);
  }
}
