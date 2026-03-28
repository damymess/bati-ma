import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260328153140 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "architect_profile" ("id" text not null, "name" text not null, "email" text not null, "phone" text null, "license_number" text null, "professional_body" text not null default 'Ordre des Architectes du Maroc', "years_experience" integer not null default 0, "specialties" jsonb not null default '[]', "regions" jsonb not null default '[]', "languages" jsonb not null default '["Français"]', "description" text null, "portfolio_images" jsonb not null default '[]', "website" text null, "hourly_rate" integer null, "project_rate_min" integer null, "project_rate_max" integer null, "verified" boolean not null default false, "premium" boolean not null default false, "is_active" boolean not null default true, "rating" real not null default 0, "review_count" integer not null default 0, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "architect_profile_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_architect_profile_deleted_at" ON "architect_profile" ("deleted_at") WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "architect_profile" cascade;`);
  }

}
