import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/models/user.model';
import { ConfigModule } from '@nestjs/config';
import { ComfortModule } from './comfort/comfort.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { CategoriesModule } from './categories/categories.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { StadiumsModule } from './stadium/stadiums.module';
import { ComfortStadiumModule } from './comfort_stadium/comfort_stadium.module';
import { MediaModule } from './media/media.module';
import { CommentModule } from './comment/comment.module';
import { AdminModule } from './admin/admin.module';
import { StadiumTimeModule } from './stadium_times/stadium_times.module';
import { StatusModule } from './status/status.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './order/orders.module';
import { UserWallet } from './user_wallet/models/user_wallet.model';
import { Comfort } from './comfort/models/comfort.model';
import { Region } from './region/models/region.model';
import { District } from './district/models/district.model';
import { Category } from './categories/models/category.model';
import { UserCard } from './user_cards/models/user_card.model';
import { Stadium } from './stadium/models/stadium.model';
import { ComfortStadium } from './comfort_stadium/models/comfort_stadium.model';
import { Media } from './media/models/media.model';
import { Comment } from './comment/models/comment.model';
import { Admin } from './admin/models/admin.model';
import { StadiumTime } from './stadium_times/models/stadium_time.model';
import { Status } from './status/models/status.model';
import { Cart } from './cart/models/cart.model';
import { Order } from './order/models/order.model';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { BotModule } from './bot/bot.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { Bot } from './bot/models/bot.model';
import { OtpModule } from './otp/otp.module';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [],
        includes: [BotModule],
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        User,
        UserWallet,
        Comfort,
        Region,
        District,
        Category,
        UserCard,
        Stadium,
        ComfortStadium,
        Media,
        Comment,
        Admin,
        StadiumTime,
        Status,
        Cart,
        Order,
        Bot,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    UsersModule,
    UserWalletModule,
    ComfortModule,
    RegionModule,
    DistrictModule,
    CategoriesModule,
    UserCardsModule,
    StadiumsModule,
    ComfortStadiumModule,
    MediaModule,
    CommentModule,
    AdminModule,
    StadiumTimeModule,
    StatusModule,
    CartModule,
    OrdersModule,
    AuthModule,
    MailModule,
    BotModule,
    OtpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
