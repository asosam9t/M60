import { IsOptional, IsString, registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export class ContentDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;
}

export class ContentSeriesDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsString()
  public series: string;

  @IsString()
  public season: string;

  @IsString()
  public episode: string;
}

export class CreatSeriesDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsString()
  public category: string;
}
